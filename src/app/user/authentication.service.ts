import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<string>;
  public loadingError$ = new Subject<string>();

  public redirectUrl: string;

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

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }


  get token(): string {
    const token = localStorage.getItem(this._tokenKey);
    //null or empty
    return !!token ? token : '';
  }

  login(gebruikersnaam: string, password: string): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/gebruikers`,
      { gebruikersnaam, password }, { responseType: "text" }).pipe(

        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            this._user$.next(gebruikersnaam);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  veranderNaam(gebruikersnaam: string) {
    return this.http.put(`${environment.apiUrl}/gebruikers/naam/${gebruikersnaam}`, gebruikersnaam);
  }

  veranderMail(mail: string) {
    return this.http.put(`${environment.apiUrl}/gebruikers/mail/${mail}`, mail);
  }

  veranderPass(oud: string, nieuw: string) {
    return this.http.put(`${environment.apiUrl}/gebruikers/pass/${oud}/${nieuw}`, { oud, nieuw });
  }

  register(email: string, gebruikersnaam: string, password: string): Observable<boolean> {
    return this.http.post(`${environment.apiUrl}/gebruikers/register`, { email, gebruikersnaam, password, passwordConfirmation: password }, { responseType: "text" }).pipe(

      catchError(err => {
        this.loadingError$.next(err.statusText);
        console.log(err);
        return of(null);
      }),

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

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var payLoad = parseJwt(localStorage.getItem(this._tokenKey));

    if (payLoad == null){
      return false;
    }

    var role = payLoad.role;

    allowedRoles.forEach(element => {
      if (role == element)
        isMatch = true;
      return false;
    });
    return isMatch;
  }

  role(): string {
    var payLoad = parseJwt(localStorage.getItem(this._tokenKey));
    if (payLoad)
      var role = payLoad.role;
    else
      role = null;
    return role;
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
