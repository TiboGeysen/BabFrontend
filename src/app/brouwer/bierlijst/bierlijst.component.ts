import { Component, OnInit } from '@angular/core';
import { BierdataService } from '../bierdata.service';
import { Observable, Subject } from 'rxjs';
import { Bier } from '../bier.model';
import { MatDialog } from '@angular/material';
import { DetailbierComponent } from '../detailbier/detailbier.component';

@Component({
  selector: 'app-bierlijst',
  templateUrl: './bierlijst.component.html',
  styleUrls: ['./bierlijst.component.css']
})
export class BierlijstComponent implements OnInit {

  private _fetchBieren$: Observable<Bier[]> = this._service.bieren$;

  constructor(private _service: BierdataService, public dialog: MatDialog) {

  }
  ngOnInit() {

  }

  get bieren$() {
    return this._fetchBieren$;
  }

  openDialog(bier: Bier) {
    this.dialog.open(DetailbierComponent, { data: { brouwer: bier.brouwerId, naambier: bier.naam, percentage: bier.percentage, kleur: bier.kleur, biersoort: bier.bierSoort, soortgisting: bier.soortGisting, smaak: bier.smaak, opvat: bier.isOpVat, recent: bier.isRecent, primeur: bier.isPrimeur, omschrijving: bier.omschrijving } });
  }
}



