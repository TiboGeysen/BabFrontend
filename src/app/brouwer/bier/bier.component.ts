import { Component, OnInit, Input } from '@angular/core';
import { Bier } from '../bier.model';
import { MatDialog } from '@angular/material';
import { DetailbierComponent } from '../detailbier/detailbier.component';
import { Brouwer } from '../brouwer.model';
import { Observable } from 'rxjs';
import { BierdataService } from '../bierdata.service';

@Component({
  selector: 'app-bier',
  templateUrl: './bier.component.html',
  styleUrls: ['./bier.component.css']
})

export class BierComponent implements OnInit {

  @Input() bier: Bier;
  @Input() brouwer$: Observable<Brouwer>;
  private brouwer: Brouwer;




  constructor(public dialog: MatDialog, private _bierService: BierdataService) {

  }

  ngOnInit() {
    this.brouwer$.subscribe((brouwer: any): Brouwer => this.brouwer = brouwer)
  }

  openDialog() {
    this.dialog.open(DetailbierComponent, { data: {id: this.brouwer.id, brouwer: this.brouwer.naam, naambier: this.bier.naam, percentage: this.bier.percentage, kleur: this.bier.kleur, biersoort: this.bier.bierSoort, soortgisting: this.bier.soortGisting, smaak: this.bier.smaak, opVat: this.bier.opVat, isOpvat: this.bier.isOpVat, recent: this.bier.recent, isRecent: this.bier.isRecent, primeur: this.bier.primeur, isPrimeur: this.bier.isPrimeur, omschrijving: this.bier.omschrijving } });
  }

  add() {
    this._bierService.voegBierAanFavorietenToe$(this.bier).subscribe();
  }

}
