import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$ = this.authService.user$;
  _loggedIn: boolean;
  _naam: string;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user$.subscribe((val) => {
      if (val)
        this._loggedIn = true;
      else
        this._loggedIn = false;
    })
  }

  logout() {
    this.router.navigate(['/login']);
    this.authService.logout();
  }

  loggedIn(): boolean {
    return this._loggedIn;
  }

  roleMatch(role): boolean {
    return this.authService.roleMatch(role);
  }
}
