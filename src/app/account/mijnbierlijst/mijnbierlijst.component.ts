import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Brouwer } from '../../brouwer/brouwer.model';
import { BrouwerdataService } from '../../brouwer/brouwerdata.service';
import { BierdataService } from '../../brouwer/bierdata.service';
import { Bier } from '../../brouwer/bier.model';

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
