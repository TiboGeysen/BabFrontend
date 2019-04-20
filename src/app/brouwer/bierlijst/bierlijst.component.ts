import { Component, OnInit } from '@angular/core';
import { BierdataService } from '../bierdata.service';
import { Observable, Subject } from 'rxjs';
import { Bier } from '../bier.model';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-bierlijst',
  templateUrl: './bierlijst.component.html',
  styleUrls: ['./bierlijst.component.css']
})
export class BierlijstComponent implements OnInit {

  private _fetchBieren$: Observable<Bier[]> = this._service.bieren$;

  constructor(private _service: BierdataService) {

  }

  get bieren$() {
    return this._fetchBieren$;
  }

  ngOnInit() {
  }

}
