import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private service: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  roleMatch(role): boolean {
    return this.service.roleMatch(role);
  }
  logout() {
    this.router.navigate(['/login']);
    this.service.logout();
  }


}
