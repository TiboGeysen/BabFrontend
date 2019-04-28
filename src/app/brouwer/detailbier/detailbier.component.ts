import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bier } from '../bier.model';
import { BierdataService } from '../bierdata.service';

@Component({
  selector: 'app-detailbier',
  templateUrl: './detailbier.component.html',
  styleUrls: ['./detailbier.component.css']
})
export class DetailbierComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _bierService: BierdataService) { }

  ngOnInit() {
  }

  add() {
    this._bierService.voegBierAanFavorietenToe$(new Bier(this.data.id, this.data.naambier, this.data.percentage, this.data.kleur, this.data.biersoort, this.data.opVat, this.data.soortgisting, this.data.smaak, this.data.omschrijving, this.data.recent, this.data.primeur)).subscribe();
  }

}
