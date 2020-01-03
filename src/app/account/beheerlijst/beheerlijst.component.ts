import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BierdataService } from 'src/app/brouwer/bierdata.service';
import { Brouwer } from 'src/app/brouwer/brouwer.model';
import { Bier } from 'src/app/brouwer/bier.model';
import { HttpErrorResponse } from '@angular/common/http';
import { EditbierComponent } from 'src/app/brouwer/editbier/editbier.component';
import { BrouwerdataService } from 'src/app/brouwer/brouwerdata.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-beheerlijst',
  templateUrl: './beheerlijst.component.html',
  styleUrls: ['./beheerlijst.component.css']
})
export class BeheerlijstComponent implements OnInit {

  @Input() private _bieren: Bier[];
  @Input() private _fetchBrouwer: Brouwer;
  @Input() private _admin: boolean = false;
  public isDataLoaded: boolean = false;
  public success: string;
  public error: string;
  public nieuweBieren: Bier[] = new Array<Bier>();

  public updates: boolean = false;

  public bierForm: FormGroup;

  constructor(private route: ActivatedRoute, private _bierService: BierdataService, private _brouwerService: BrouwerdataService, private modalService: NgbModal, private formBuilder: FormBuilder) {


  }

  ngOnInit() {
    if (this._fetchBrouwer == null) {
      this.route.data.subscribe(items => {
        this._fetchBrouwer = items['brouwer'];
        this._bieren = this._fetchBrouwer.bieren;
      });
    }

    this.bierForm = new FormGroup({
      checkboxes: this.buildBoxes()
    });


  }

  buildBoxes() {
    const arr = this._bieren.map(bier => {
      return this.formBuilder.control(bier.aanwezig)
    })

    return this.formBuilder.array(arr)
  }

  get checkBoxes() {
    return this.bierForm.get('checkboxes');
  };

  close() {
    this.success = null;
    this.error = null;
  }

  update(bier: Bier, event: any) {

    for (let i = 0; i < this.nieuweBieren.length; i++) {
      if (this.nieuweBieren[i].id == bier.id) {
        this.nieuweBieren.splice(i);
      }
    }



    let nieuwBier = new Bier(bier.naam, bier.percentage, bier.kleur, bier.biersoort,
      bier.opVat, bier.opFles, bier.soortGisting, bier.smaak, bier.omschrijving, bier.recent, event, bier.primeur, bier.aantalJetons);


    nieuwBier.id = bier.id;
    nieuwBier.brouwerId = bier.brouwerId;
    nieuwBier.brouwerNaam = bier.brouwerNaam;

    this.nieuweBieren.push(nieuwBier);
    this.updates = true;
  }

  noUpdates() {
    return this.updates;
  }

  saveUpdates() {
    for (let val of this.nieuweBieren) {
      let nieuwBier = new Bier(val.naam, val.percentage, val.kleur, val.biersoort,
        val.opVat, val.opFles, val.soortGisting, val.smaak, val.omschrijving, val.recent, val.aanwezig, val.primeur, val.aantalJetons);


      nieuwBier.id = val.id;
      nieuwBier.brouwerId = val.brouwerId;
      if (val.brouwerNaam === undefined) {
        nieuwBier.brouwerNaam = null;
      } else {
        nieuwBier.brouwerNaam = val.brouwerNaam;
      }
      this._bierService.editBier$(nieuwBier).subscribe(
        (val: Bier) => {
          this.success = "De bieren zijn met success aangepast";
          for (let i = 0; i < this._bieren.length; i++) {
            if (this._bieren[i].id == val.id) {
              this._bieren[i] = val;
            }
          }
        },
        () => this.error = "De bieren zijn niet aangepast"
      );
    }
    this.updates = false;

  }

  closeModal() {
    this._brouwerService.getBrouwer$(this._fetchBrouwer.id).subscribe(
      (val) => {
        this._fetchBrouwer = val;
        this._bieren = this._fetchBrouwer.bieren;
      }
    )
  }

  get admin(): boolean {
    return this._admin;
  }

  open(bier: Bier) {
    const modalRef = this.modalService.open(EditbierComponent, { centered: true });
    modalRef.componentInstance.bier = bier;
    modalRef.componentInstance.brouwer = this.brouwer;

    modalRef.result.then((result) => {
      if (result == "Save") {
        this.success = "Het bier is met success aangepast"
        this.closeModal();
      } else if (result == "Unsave") {

        this.error = "Het bier is niet gewijzigd";
        console.log(this.error)

        this.closeModal();
      }
    });
  }

  delete(bier: Bier) {
    this._bierService.verwijderBier$(bier).subscribe(
      () => {
        this.remove(bier);
        this.success = "Het bier is met succes verwijderd";
      }, (err: HttpErrorResponse) => {
        if (err) {
          this.error = "Het bier is niet verwijderd";
          console.log(err)
        }
      });
  }

  remove(bier: Bier) {
    const index: number = this._bieren.indexOf(bier);
    if (index !== -1) {
      this._bieren.splice(index, 1);
    }
  }

  get brouwer() {
    return this._fetchBrouwer;
  }

  get brouwerbieren() {
    return this._bieren;
  }
}
