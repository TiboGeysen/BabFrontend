import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Bier } from '../bier.model';
import { BierdataService } from '../bierdata.service';
import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { BrouwerdataService } from '../brouwerdata.service';

@Component({
  selector: 'app-addbier',
  templateUrl: './addbier.component.html',
  styleUrls: ['./addbier.component.css']
})
export class AddbierComponent implements OnInit {

  private kleuren: string[] = ["Blond", "Amber", "Bruin", "Rood/roze", "Zwart"];
  private biersoorten: string[] = ["Abdijbier", "Blond tot amberkleurig", "Brut", "Buiten categorie", "Dubbel", "Fruitbier", "Geuze", "Honingbier", "IPA en soortgelijke bieren", "Kerst-/winterbier", "Mengbier", "Vlaams oudbruin", "Pils", "Saison", "Speciaal bier", "Stout/porter", "Tafelbier", "Trappistenbier", "Tripel", "Witbier"];
  private tap: string[] = ["Op vat", "In fles"];
  private gistingen: string[] = ["Lage gisting", "Hoge gisting", "Hoge gisting met hergisting", "Spontane gisting", "Gemengde gisting"];
  private smaken: string[] = ["Lichtbitter", "Bitter", "Zeer bitter", "Moutig", "Kruidig", "Fruitig", "Zoet", "Zeer zoet", "Licht zurig", "Zuur", "Zeer zuur", "Glutenvrij"];

  public bier: FormGroup;

  error: string;
  success: string;

  constructor(private _bierService: BierdataService, private _userService: AuthenticationService, private _brouwerService: BrouwerdataService) { }

  ngOnInit() {
    //form voor nieuwbier
    this.bier = new FormGroup({
      brouwersnaam: new FormControl(this._userService.user$.getValue()),
      biernaam: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(1)]),
      percentage: new FormControl('', [Validators.required, Validators.max(40), Validators.min(0)]),
      aantalJetons: new FormControl('', [Validators.required, Validators.max(2), Validators.min(1)]),
      kleur: new FormControl('', Validators.required),
      smaak: new FormControl('', Validators.required),
      biersoort: new FormControl('', Validators.required),
      soortgisting: new FormControl('', Validators.required),
      omschrijving: new FormControl('', [Validators.required, Validators.maxLength(210), Validators.minLength(10)]),
      opVat: new FormControl(false, Validators.required),
      opFles: new FormControl(false, Validators.required),
      recent: new FormControl(false, Validators.required),
      primeur: new FormControl(false, Validators.required),
    })
  }

  close() {
    this.error = null;
    this.success = null;
  }

  onSubmit() {
    let bier = new Bier(this.bier.value.biernaam, this.bier.value.percentage, this.bier.value.kleur, this.bier.value.biersoort,
      this.bier.value.opVat, this.bier.value.opFles, this.bier.value.soortgisting, this.bier.value.smaak, this.bier.value.omschrijving, this.bier.value.recent, true, this.bier.value.primeur, this.bier.value.aantalJetons);
    this._bierService.voegBierToe(bier).subscribe(
      () => {
        this.success = "Het bier is succesvol toegevoegd";
      }, err => {
        this.error = "Het bier is niet toegevoegd"
        console.log(err)
      }
    );

    this.bier.reset();
    this.bier = new FormGroup({
      brouwersnaam: new FormControl(this._userService.user$.getValue()),
      biernaam: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(1)]),
      percentage: new FormControl('', [Validators.required, Validators.max(40), Validators.min(0)]),
      aantalJetons: new FormControl('', [Validators.required, Validators.max(2), Validators.min(1)]),
      kleur: new FormControl('', Validators.required),
      smaak: new FormControl('', Validators.required),
      biersoort: new FormControl('', Validators.required),
      soortgisting: new FormControl('', Validators.required),
      omschrijving: new FormControl('', [Validators.required, Validators.maxLength(210), Validators.minLength(10)]),
      opVat: new FormControl(false, Validators.required),
      opFles: new FormControl(false, Validators.required),
      recent: new FormControl(false, Validators.required),
      primeur: new FormControl(false, Validators.required)
    })
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
    else if (errors.min) {
      return `De ingegeven waarde is te laag`
    }
    else if (errors.max) {
      return `De ingegeven waarde is te hoog`
    }
  }
}
