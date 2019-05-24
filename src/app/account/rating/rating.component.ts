import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Bier } from 'src/app/brouwer/bier.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input() rating: number;
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() bier: Bier;
  public ratingChange$ = new Subject<number>();

  onClick(rating: number): void {
    this.rating = rating;
    this.ratingClick.emit({
      rating: rating
    })
  }
}
