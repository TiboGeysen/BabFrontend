import { Component, OnInit } from '@angular/core';
import { BierdataService } from '../bierdata.service';
import { Bier } from '../bier.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bier',
  templateUrl: './bier.component.html',
  styleUrls: ['./bier.component.css']
})
export class BierComponent implements OnInit {

  private _fetchBieren$: Observable<Bier[]> = this._service.bieren$;
  public loadingError$ = this._service.loadingError$;
  bieren: string[];

  constructor(private _service: BierdataService) {
  }

  ngOnInit() {
  }



  get bieren$(): Observable<Bier[]> {
    return this._fetchBieren$;
  }

}
