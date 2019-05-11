import { Component, OnInit } from '@angular/core';
import { BierdataService } from '../bierdata.service';
import { Observable } from 'rxjs';
import { Bier } from '../bier.model';
import { Brouwer } from '../brouwer.model';
import { BrouwerdataService } from '../brouwerdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bierlijst',
  templateUrl: './bierlijst.component.html',
  styleUrls: ['./bierlijst.component.css']
})
export class BierlijstComponent implements OnInit {

  private _fetchBieren: Bier[];

  constructor(private _service: BrouwerdataService, private _bierService: BierdataService, private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.data.subscribe(items => this._fetchBieren = items['bieren']);
  }

  getBrouwer$(id: number): Observable<Brouwer> {
    return this._service.getBrouwer$(id);
  }

  get bieren$() {

    return this._fetchBieren;

  }
}



