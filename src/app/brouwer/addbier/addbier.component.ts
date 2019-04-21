import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bier } from '../bier.model';

@Component({
  selector: 'app-addbier',
  templateUrl: './addbier.component.html',
  styleUrls: ['./addbier.component.css']
})
export class AddbierComponent implements OnInit {

  //output this to the world
  @Output() public nieuwBier = new EventEmitter<Bier>();
  public bier: FormGroup;

  constructor() { }

  ngOnInit() {
    //form voor nieuwbier
    this.bier = new FormGroup({
      brouwersnaam: new FormControl('BrouwerTibo'),
      biernaam: new FormControl('', Validators.required),
      percentage: new FormControl('', Validators.required),
      kleur: new FormControl('', Validators.required),
      smaak: new FormControl('', Validators.required),
      biersoort: new FormControl('', Validators.required),
      soortgisting: new FormControl('', Validators.required),
      omschrijving: new FormControl('', Validators.required),
      opVat: new FormControl('', Validators.required),
      recent: new FormControl('', Validators.required),
      primeur: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    //this.nieuwBier.emit(new Bier());
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Verplicht in te vullen';
    }
  }

}
