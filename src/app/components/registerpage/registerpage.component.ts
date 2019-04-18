import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  constructor() { }

  public gebruiker: FormGroup

  ngOnInit() {
    this.gebruiker = new FormGroup({
      gebruikersnaam: new FormControl("Tibo", Validators.required)
    })


  }

}
