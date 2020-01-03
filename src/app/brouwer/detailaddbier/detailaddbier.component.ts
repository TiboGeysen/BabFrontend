import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Brouwer } from '../brouwer.model';
import { Bier } from '../bier.model';
import { BierdataService } from '../bierdata.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-detailaddbier',
  templateUrl: './detailaddbier.component.html',
  styleUrls: ['./detailaddbier.component.css']
})
export class DetailaddbierComponent implements OnInit {

  @Input() public brouwer: Brouwer;
  error: string;
  success: string;

  private kleuren: string[] = ["Blond", "Amber", "Bruin", "Rood/roze", "Zwart"];
  private soorten: string[] = ["Abdijbier", "Blond tot amberkleurig", "Brut", "Buiten categorie", "Dubbel", "Fruitbier", "Geuze", "Honingbier", "IPA en soortgelijke bieren", "Kerst-/winterbier", "Mengbier", "Vlaams oudbruin", "Pils", "Saison", "Speciaal bier", "Stout/porter", "Tafelbier", "Trappistenbier", "Tripel", "Witbier"]; private tap: string[] = ["Op vat", "In fles"];
  private gistingen: string[] = ["Lage gisting", "Hoge gisting", "Hoge gisting met hergisting", "Spontane gisting", "Gemengde gisting"];
  private smaken: string[] = ["Lichtbitter", "Bitter", "Zeer bitter", "Moutig", "Kruidig", "Fruitig", "Zoet", "Zeer zoet", "Licht zurig", "Zuur", "Zeer zuur", "Glutenvrij"];


  public bierForm: FormGroup;


  constructor(private _bierService: BierdataService, public activeModal: NgbActiveModal) { }

  ngOnInit() {

    this.bierForm = new FormGroup({
      biernaam: new FormControl('', [Validators.required, Validators.maxLength(40), Validators.minLength(1)]),
      percentage: new FormControl('', [Validators.required, Validators.max(40), Validators.min(0)]),
      aantalJetons: new FormControl('', [Validators.required, Validators.max(2), Validators.min(1)]),
      kleur: new FormControl('', [Validators.required]),
      soort: new FormControl('', [Validators.required]),
      smaak: new FormControl('', Validators.required),
      soortgisting: new FormControl('', Validators.required),
      omschrijving: new FormControl('', [Validators.required, Validators.maxLength(210), Validators.minLength(10)]),
      opVat: new FormControl(false, Validators.required),
      opFles: new FormControl(false, Validators.required),
      recent: new FormControl(false, Validators.required),
      primeur: new FormControl(false, Validators.required)
    })
  }

  close() {
    this.error = null;
    this.success = null;
  }

  add() {
    //add stuff

    let bier = new Bier(this.bierForm.value.biernaam, this.bierForm.value.percentage, this.bierForm.value.kleur, this.bierForm.value.soort,
      this.bierForm.value.opVat, this.bierForm.value.opFles, this.bierForm.value.soortgisting, this.bierForm.value.smaak, this.bierForm.value.omschrijving, this.bierForm.value.recent, true, this.bierForm.value.primeur, this.bierForm.value.aantalJetons);
    bier.brouwerId = this.brouwer.id;
    bier.brouwerNaam = this.brouwer.naam;

    this._bierService.voegBierToeAdmin(bier, this.brouwer.id).subscribe(
      () => {
        this.activeModal.close('Save');

      }, err => {
        console.log(err)
        console.log(bier)
        this.activeModal.close('Unsave');

      }
    );
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
      return `De ingevulde waarde is te laag`;
    }
    else if (errors.max) {
      return `De ingevulde waarde is te hoog`;
    }
  }
}
