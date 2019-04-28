import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Bier } from '../bier.model';
import { BierdataService } from '../bierdata.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-addbier',
  templateUrl: './addbier.component.html',
  styleUrls: ['./addbier.component.css']
})
export class AddbierComponent implements OnInit {

  //output this to the world

  private kleuren: string[] = ["Blond", "Amber", "Bruin", "Rood/roze", "Zwart"];
  private biersoorten: string[] = ["Abdijbier", "Blond tot amberkleurig", "Brut", "Buiten categorie", "Dubbel", "Fruitbier", "Geuze", "Honingbier", "IPA en soortgelijke bieren", "Kerst-/winterbier", "Mengbier", "Vlaams oudbruin", "Pils", "Saison", "Speciaal bier", "Sout", "Tafelbier", "Trappistenbier", "Tripel", "Witbier"];
  private tap: string[] = ["Op vat", "In fles"];
  private gistingen: string[] = ["Lage gisting", "Hoge gisting", "Hoge gisting met hergisting", "Spontane gisting", "Gemengde gisting"];
  private smaken: string[] = ["Lichtbitter", "Bitter", "Zeer bitter", "Moutig", "Kruidig", "Fruitig", "Zoet", "Zeer zoet", "Licht zurig", "Zuur", "Zeer zuur", "Glutenvrij"];

  public bier: FormGroup;

  constructor(private _bierService: BierdataService) { }

  ngOnInit() {
    //form voor nieuwbier
    this.bier = new FormGroup({
      brouwersnaam: new FormControl('BrouwerTibo'),
      biernaam: new FormControl('', [Validators.required, Validators.maxLength(30), Validators.minLength(1)]),
      percentage: new FormControl('', [Validators.required]),
      kleur: new FormControl('', Validators.required),
      smaak: new FormControl('', Validators.required),
      biersoort: new FormControl('', Validators.required),
      soortgisting: new FormControl('', Validators.required),
      omschrijving: new FormControl('', [Validators.required, Validators.maxLength(150), Validators.minLength(10)]),
      opVat: new FormControl(false, Validators.required),
      recent: new FormControl(false, Validators.required),
      primeur: new FormControl(false, Validators.required),
    })
  }

  onSubmit() {
    let bier = new Bier(5, this.bier.value.biernaam, this.bier.value.percentage, this.bier.value.kleur, this.bier.value.biersoort,
      this.bier.value.opVat, this.bier.value.soortgisting, this.bier.value.smaak, this.bier.value.omschrijving, this.bier.value.recent, this.bier.value.primeur);
    this._bierService.voegBierToe(bier).subscribe();
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Veld is verplicht in te vullen';
    } else if (errors.minlength) {
      return `Te kort, minimaal ${errors.minlength.requiredLength} karakaters, u heeft er ${errors.minlength.actualLength}`;
    }
    else if (errors.maxlength) {
      return `Te lang, maximaal ${errors.maxlength.requiredLength} karakaters, u heeft er ${errors.maxlength.actualLength}`;
    }
  }

}


