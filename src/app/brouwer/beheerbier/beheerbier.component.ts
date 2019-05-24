import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { BierdataService } from '../bierdata.service';
import { Bier } from '../bier.model';
import { Brouwer } from '../brouwer.model';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditbierComponent } from '../editbier/editbier.component';

@Component({
  selector: 'app-beheerbier',
  templateUrl: './beheerbier.component.html',
  styleUrls: ['./beheerbier.component.css']
})
export class BeheerbierComponent implements OnInit {

  @Input() public bier: Bier;
  @Input() public brouwer: Brouwer;

  @Output() error = new EventEmitter<string>();
  @Output() success = new EventEmitter<string>();
  @Output() remove = new EventEmitter<Bier>();

  constructor(private _bierService: BierdataService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(EditbierComponent, { centered: true });
    modalRef.componentInstance.bier = this.bier;
    modalRef.componentInstance.brouwer = this.brouwer;
  }

  delete() {
    this._bierService.verwijderBier$(this.bier).subscribe(
      () => {
        this.remove.emit(this.bier);
        this.success.emit("Het bier is met succes verwijderd");
      }, (err: HttpErrorResponse) => {
        if (err) {
          this.error.emit("Het bier is niet verwijderd");
        }
      });
  }

}
