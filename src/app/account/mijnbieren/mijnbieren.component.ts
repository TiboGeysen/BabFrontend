import { Component, OnInit, ViewChild, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { Bier } from 'src/app/brouwer/bier.model';
import { Brouwer } from 'src/app/brouwer/brouwer.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DetailbierComponent } from '../../brouwer/detailbier/detailbier.component';
import { MatDialog } from '@angular/material';
import { BierdataService } from '../../brouwer/bierdata.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-mijnbieren',
  templateUrl: './mijnbieren.component.html',
  styleUrls: ['./mijnbieren.component.css']
})
export class MijnbierenComponent implements OnInit {

  private _fetchBrouwers: Brouwer[];
  private _fetchBieren: Bier[];
  public success: string;
  public error: string;

  constructor(private route: ActivatedRoute, private modalService: NgbModal, private _bierService: BierdataService) {

  }


  ngOnInit() {
    this.route.data.subscribe(items => this._fetchBrouwers = items['mijnbrouwers']);
    console.log(this._fetchBrouwers);
    this.route.data.subscribe(items => {
      this._fetchBieren = items['mijnbieren'];
      this._bierService.getRatings$(this._fetchBieren)
        .subscribe((ratingList: any[]) => {
          for (const oneRating of ratingList) {
            const { bier, rating } = oneRating;
            console.log(oneRating);
            this._fetchBieren.find(rec => rec.id === bier.id).rating = rating;
          }
        });
    });


  }

  adjustRating(clickObj: any, bier: Bier): void {

    console.log(clickObj, bier);

    this._bierService
      .rateBier(bier, clickObj.rating)
      .subscribe(
        (newRating: number) => {
          this._fetchBieren.find(bier => bier.id === bier.id).rating = newRating;
          this.success = "De rating is met success ontvangen";
        }, () => {
          this._fetchBieren.find(bier => bier.id === bier.id).rating = 0;

          this.error = "De rating is niet verwijderd!";
        }
      );
  }

  close() {
    this.success = null;
    this.error = null;
  }

  open(bier: Bier) {
    const modalRef = this.modalService.open(DetailbierComponent, { centered: true });
    modalRef.componentInstance.bier = bier;
    modalRef.componentInstance.brouwer = this.brouwer(bier.brouwerId);
  }

  delete(bier: Bier) {
    this._bierService.verwijderUitFavorieten$(bier).subscribe(
      () => {
        this.fetchBieren();
        this.success = "Het bier is met success verwijderd";
      }, (err) => {
        if (err) {
          this.error = "Het bier is niet ontvangen!";
        }
      });
  }

  fetchBieren() {
    this._bierService.mijnBieren$.subscribe(data => this._fetchBieren = data);
    this._bierService.getRatings$(this._fetchBieren)
      .subscribe((ratingList: any[]) => {
        for (const oneRating of ratingList) {
          const { bier, rating } = oneRating;
          console.log(oneRating);
          this._fetchBieren.find(rec => rec.id === bier.id).rating = rating;
        }
      });
  }
  get mijnbieren$() {
    return this._fetchBieren;
  }

  brouwer(id: number): Brouwer {
    return this._fetchBrouwers.find(b => b.id == id);
  }
}
