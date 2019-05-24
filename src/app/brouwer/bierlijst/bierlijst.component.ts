import { Component, OnInit } from '@angular/core';
import { BierdataService } from '../bierdata.service';
import { Observable, Subject } from 'rxjs';
import { Bier } from '../bier.model';
import { Brouwer } from '../brouwer.model';
import { BrouwerdataService } from '../brouwerdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-bierlijst',
  templateUrl: './bierlijst.component.html',
  styleUrls: ['./bierlijst.component.css']
})
export class BierlijstComponent implements OnInit {

  public filterData: string = '';
  private _brouwers: Brouwer[];
  private _fetchBrouwers$: Observable<Brouwer[]> = this._brouwerService.brouwers$;

  public filter$ = new Subject<string>();

  error: string;
  success: string;

  constructor(private route: ActivatedRoute, private _brouwerService: BrouwerdataService, private _router: Router) {

  }
  ngOnInit() {

    this.filter$
      .pipe(
        distinctUntilChanged(),
        debounceTime(250)
      )
      .subscribe(val => {
        const params = val ? { queryParams: { filter: val } } : undefined;
        this._router.navigate(['/bier/lijst'], params);
        console.log(this._brouwers);
      });

    this.route.queryParams.subscribe(params => {
      this._brouwerService
        .getBrouwers$(params['filter'])
        .subscribe(val => (this._brouwers = val));
      if (params['filter']) {
        this.filterData = params['filter'];
      }
    });

  }


  get brouwers$() {
    return this._brouwers;
  }

  close() {
    this.error = null;
    this.success = null;
  }





  brouwer(id: number): Brouwer {
    return this._brouwers.find(b => b.id == id);
  }
}



