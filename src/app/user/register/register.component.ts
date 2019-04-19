import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  public gebruiker: FormGroup

  ngOnInit() {
    this.gebruiker = new FormGroup({
      gebruikersnaam: new FormControl("Tibo", Validators.required)
    })
  }

}
