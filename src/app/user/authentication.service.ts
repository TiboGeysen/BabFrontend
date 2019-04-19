import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

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

}

function parseJwt(token) {

  if (!token) {
    return null;
  }

  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}
