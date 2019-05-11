import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../user/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instellingen',
  templateUrl: './instellingen.component.html',
  styleUrls: ['./instellingen.component.css']
})
export class InstellingenComponent implements OnInit {


  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  public gebruiker: FormGroup

  ngOnInit() {

    this.gebruiker = this.fb.group({
      oldPass: ['', Validators.required],
      passwordGroup: this.fb.group({
        newPass: ['', [Validators.required, Validators.minLength(8)]],
        herhaalwachtwoord: ['', Validators.required]
      },
        { validator: comparePassword })
    });
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

}

function comparePassword(control: AbstractControl): { [key: string]: any } {
  const wachtwoord = control.get('newPass');
  const herhaal = control.get('herhaalwachtwoord');
  return wachtwoord.value === herhaal.value ? null : { wachtwoordVerschil: true }
}