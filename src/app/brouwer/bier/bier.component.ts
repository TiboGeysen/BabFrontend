import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Bier } from '../bier.model';
import { MatDialog } from '@angular/material';
import { DetailbierComponent } from '../detailbier/detailbier.component';
import { Brouwer } from '../brouwer.model';
import { Observable } from 'rxjs';
import { BierdataService } from '../bierdata.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/user/authentication.service';

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

  public checked: String;




  constructor(private service: AuthenticationService, private _bierService: BierdataService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.checked = null;
  }
  roleMatch(role): boolean {
    return this.service.roleMatch(role);
  }

  open() {
    const modalRef = this.modalService.open(DetailbierComponent, { centered: true });
    modalRef.componentInstance.bier = this.bier;
    modalRef.componentInstance.brouwer = this.brouwer;
  }

  rate() {
    this.checked = "green";

    this._bierService.rateBestBier(this.bier.naam, this.brouwer.naam).subscribe(
      () => {
        console.log("suc");
      }, err => {
        console.log(err)
      }
    );

    setTimeout(() => { this.checked = null; }, 2000);



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
