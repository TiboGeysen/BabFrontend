import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Bier } from '../bier.model';
import { MatDialog } from '@angular/material';
import { DetailbierComponent } from '../detailbier/detailbier.component';
import { Brouwer } from '../brouwer.model';
import { Observable } from 'rxjs';
import { BierdataService } from '../bierdata.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bier',
  templateUrl: './bier.component.html',
  styleUrls: ['./bier.component.css']
})

export class BierComponent implements OnInit {
  @Input() public bier: Bier;
  @Input() public brouwer: Brouwer;

  @Output() error = new EventEmitter<string>();
  @Output() success = new EventEmitter<string>();


  constructor(private _bierService: BierdataService, private modalService: NgbModal) {

  }

  ngOnInit() {

  }

  open() {
    const modalRef = this.modalService.open(DetailbierComponent, { centered: true });
    modalRef.componentInstance.bier = this.bier;
    modalRef.componentInstance.brouwer = this.brouwer;
  }

  add() {
    this._bierService.voegBierAanFavorietenToe$(this.bier).subscribe(
      () => {
        this.success.emit("Het bier is met succes toegevoegd aan uw lijst");
      }, err => {
        this.error.emit("Het bier is niet toegevoegd aan uw lijst");
      });
  }

}
