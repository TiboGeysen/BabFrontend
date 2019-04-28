import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/user/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened: boolean;
  gebruikerClaims: any;

  constructor(private _service: AuthenticationService) { }

  ngOnInit() {
    //this.gebruikerClaims = this._service.getGebruikersClaims().subscribe((data: any) => this.gebruikerClaims = data);
  }

  toggle() {
    this.opened = !this.opened;
  }

}
