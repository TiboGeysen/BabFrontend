import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public gebruiker: FormGroup;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

    this.gebruiker = new FormGroup({
      gebruikersnaam: new FormControl(''),
      wachtwoord: new FormControl('')
    })

  }

  onSubmit() {
    this.authService.login(this.gebruiker.value.gebruikersnaam, this.gebruiker.value.wachtwoord).subscribe();
  }
}
