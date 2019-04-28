import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public gebruiker: FormGroup
  public errorMsg: string;

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {

    this.gebruiker = new FormGroup({
      gebruikersnaam: new FormControl(''),
      wachtwoord: new FormControl('')
    })

  }

  onSubmit() {
    this.authService.login(this.gebruiker.value.gebruikersnaam, this.gebruiker.value.wachtwoord).subscribe(
      val => {
        if (val) {
          if (this.authService.redirectUrl) {
            this.router.navigateByUrl(this.authService.redirectUrl);
            this.authService.redirectUrl = undefined;
          } else {
            this.router.navigate(['/voegtoe']);
          }
        }
      }, err => this.errorMsg = err.error

    );
  }
}
