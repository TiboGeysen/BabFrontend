import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthenticationService) { }

  public gebruiker: FormGroup

  ngOnInit() {
    this.gebruiker = this.fb.group({
      email: ['', [Validators.email, Validators.required], serverSideValidateEmail(this.authService.checkEmail)],
      gebruikersnaam: ['', Validators.required, serverSideValidateUsername(this.authService.checkUsername)],
      passwordGroup: this.fb.group({
        wachtwoord: ['', [Validators.required, Validators.minLength(8)]],
        herhaalwachtwoord: ['', Validators.required]
      },
        { validator: comparePassword })
    });
  }

  onSubmit() {
    this.authService.register(this.gebruiker.value.email, this.gebruiker.value.gebruikersnaam, this.gebruiker.get('passwordGroup').value.wachtwoord).subscribe();
  }
}

function comparePassword(control: AbstractControl): { [key: string]: any } {
  const wachtwoord = control.get('wachtwoord');
  const herhaal = control.get('herhaalwachtwoord');
  return wachtwoord.value === herhaal.value ? null : { 'Wachtwoorden verschillen': true }
}

function serverSideValidateEmail(checkAvailabilityFn: (n: string) => Observable<boolean>): ValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    return checkAvailabilityFn(control.value).pipe(
      map(available => {
        if (available) {
          return null;
        }
        return { emailAlreadyExists: true };
      })
    );
  };
}

function serverSideValidateUsername(checkAvailabilityFn: (n: string) => Observable<boolean>): ValidatorFn {
  return (control: AbstractControl): Observable<{ [key: string]: any }> => {
    return checkAvailabilityFn(control.value).pipe(
      map(available => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}
