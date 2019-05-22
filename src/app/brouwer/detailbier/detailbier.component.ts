import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bier } from '../bier.model';
import { BierdataService } from '../bierdata.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Brouwer } from '../brouwer.model';

@Component({
  selector: 'app-detailbier',
  templateUrl: './detailbier.component.html',
  styleUrls: ['./detailbier.component.css']
})
export class DetailbierComponent implements OnInit {


  @Input() public bier: Bier;
  @Input() public brouwer: Brouwer;
  error: string;
  success: string;

  constructor(private _bierService: BierdataService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close() {
    this.error = null;
    this.success = null;
  }

  add() {
    this._bierService.voegBierAanFavorietenToe$(this.bier).subscribe(
      () => {
        this.success = "Het bier is met success toegevoegd aan uw lijst";
      }, err => {
        if (err) {
          this.error = "Het bier is niet toegevoegd, het staat al in uw lijst";
        }
      }
    );
  }

}
