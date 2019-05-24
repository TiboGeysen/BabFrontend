import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../../user/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-instellingen',
  templateUrl: './instellingen.component.html',
  styleUrls: ['./instellingen.component.css']
})
export class InstellingenComponent implements OnInit {


  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) { }
  error: string;
  success: string;

  public gebruikersnaam: FormGroup;
  public email: FormGroup;
  public wachtwoord: FormGroup;

  ngOnInit() {
    this.email = this.fb.group({
      email: ['', [Validators.email, Validators.required], serverSideValidateEmail(this.authService.checkEmail)]
    })

    this.gebruikersnaam = this.fb.group({
      gebruikersnaam: ['', Validators.required, serverSideValidateUsername(this.authService.checkUsername)]
    })

    this.wachtwoord = this.fb.group({
      oudWachtwoord: ['', [Validators.required, Validators.minLength(8)]],
      passwordGroup: this.fb.group({
        nieuwWachtwoord: ['', [Validators.required, Validators.minLength(8)]],
        herhaalNieuw: ['', Validators.required]
      },
        { validator: comparePassword })
    })
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Veld is verplicht in te vullen';
    }
    else if (errors.email) {
      return 'Email voldoet niet aan de standaarden'
    }
    else if (errors.minlength) {
      return `Te kort, minimaal ${errors.minlength.requiredLength} karakaters, u heeft er ${errors.minlength.actualLength}`;
    }
    else if (errors.wachtwoordVerschil) {
      return 'Wachtwoorden verschillen'
    }
    else if (errors.emailAlreadyExists) {
      return 'Email is al in gebruik';
    }
    else if (errors.userAlreadyExists) {
      return 'Gebruikersnaam is al in gebruik'
    }
  }

  onSubmitPass() {
    this.authService.veranderPass(this.wachtwoord.value.oudWachtwoord, this.wachtwoord.get("passwordGroup").value.nieuwWachtwoord).subscribe(
      (val) => {
        console.log(val);
        this.success = "Uw wachtwoord is met success aangepast";
      }, err => {
        this.error = "Uw wachtwoord is niet aangepast";
      }
    )

    this.wachtwoord.reset();
  }

  onSubmitNaam() {
    console.log(this.gebruikersnaam.value.gebruikersnaam);
    this.authService.veranderNaam(this.gebruikersnaam.value.gebruikersnaam).subscribe(
      () => {
        this.success = "Uw naam is met success aangepast";
      }, err => {
        this.error = "Uw naam is niet aangepast";
      }
    )

    this.gebruikersnaam.reset();
  }

  onSubmitMail() {
    this.authService.veranderMail(this.email.value.email).subscribe(
      () => {
        this.success = "Uw email is met success aangepast";
      }, err => {
        this.error = "Uw email is niet aangepast";
      })


    this.email.reset();
  }
}

function comparePassword(control: AbstractControl): { [key: string]: any } {
  const wachtwoord = control.get('nieuwWachtwoord');
  const herhaal = control.get('herhaalNieuw');
  return wachtwoord.value === herhaal.value ? null : { wachtwoordVerschil: true }
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