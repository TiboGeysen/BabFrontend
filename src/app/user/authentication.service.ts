import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<string>;

  constructor(private http: HttpClient) {

    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));

    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();

      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }

    this._user$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name);

  }

  login(gebruikersnaam: string, password: string): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/gebruikers`,
      { gebruikersnaam, password }, { responseType: "text" }).pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(gebruikersnaam);
            console.log("Werkt");
            return true;
          } else {
            console.log("Werkt niet");
            return false;
          }
        })
      );
  }

  register(email: string, gebruikersnaam: string, password: string): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/gebruikers/register`, { email, gebruikersnaam, password, passwordConfirmation: password }, { responseType: "text" }).pipe(
      map((token: any) => {
        if (token) {
          localStorage.setItem(this._tokenKey, token);
          this._user$.next(gebruikersnaam);
          return true;
        } else return false;
      }
      ));
  }

  logout() {
    if (this._user$.getValue()) {
      localStorage.removeItem(this._tokenKey);
      this._user$.next(null);
    }
  }

  checkEmail = (email: string): Observable<boolean> => {
    return this.http.get<boolean>(`${environment.apiUrl}/gebruikers/checkEmail`, {
      params: { email }
    });
  }

  checkUsername = (username: string): Observable<boolean> => {
    return this.http.get<boolean>(`${environment.apiUrl}/gebruikers/checkUsername`, {
      params: { username }
    });
  }
}

function parseJwt(token) {

  if (!token) {
    return null;
  }

  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
