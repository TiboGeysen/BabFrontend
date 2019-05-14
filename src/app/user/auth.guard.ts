import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.user$.getValue()) {
      let roles = next.data['toegelaten'] as Array<string>;
      if (roles) {
        if (this.authService.roleMatch(roles))
          return true;
        this.router.navigate(['/forbidden']);
        return false;
      }
      else return true;
    }

    this.authService.redirectUrl = state.url;
    this.router.navigate(['/forbidden']);
    return false;
  }

}
