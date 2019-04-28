import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brouwer } from '../brouwer.model';
import { BrouwerdataService } from '../brouwerdata.service';
import { BierdataService } from '../bierdata.service';
import { Bier } from '../bier.model';
import { MatTreeModule } from '@angular/material';
import { map, count } from 'rxjs/operators';

@Component({
  selector: 'app-mijnbierlijst',
  templateUrl: './mijnbierlijst.component.html',
  styleUrls: ['./mijnbierlijst.component.css']
})
export class MijnbierlijstComponent implements OnInit {

  private _fetchBieren$: Observable<Bier[]> = this._serviceBieren.mijnBieren$;
  private _leeg: boolean = true;


  constructor(private _service: BrouwerdataService, private _serviceBieren: BierdataService) { }

  ngOnInit() {
  }

  getBrouwer$(id: number): Observable<Brouwer> {
    return this._service.getBrouwer$(id);
  }

  get mijnBieren$() {
    return this._fetchBieren$;
  }
}
