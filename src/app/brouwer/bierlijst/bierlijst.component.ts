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
  private _brouwers: Brouwer[];

  constructor(private route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.data.subscribe(items => this._brouwers = items['brouwers']);
    this.route.data.subscribe(items => this._fetchBieren = items['bieren']);
  }

  get bieren$() {
    return this._fetchBieren;
  }



  brouwer(id: number): Brouwer {
    return this._brouwers.find(b => b.id == id);
  }
}



