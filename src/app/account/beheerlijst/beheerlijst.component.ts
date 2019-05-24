import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BierdataService } from 'src/app/brouwer/bierdata.service';
import { Brouwer } from 'src/app/brouwer/brouwer.model';
import { Bier } from 'src/app/brouwer/bier.model';
import { HttpErrorResponse } from '@angular/common/http';
import { EditbierComponent } from 'src/app/brouwer/editbier/editbier.component';
import { BrouwerdataService } from 'src/app/brouwer/brouwerdata.service';

@Component({
  selector: 'app-beheerlijst',
  templateUrl: './beheerlijst.component.html',
  styleUrls: ['./beheerlijst.component.css']
})
export class BeheerlijstComponent implements OnInit {

  @Input() private _bieren: Bier[];
  @Input() private _fetchBrouwer: Brouwer;
  @Input() private _admin: boolean = false;
  public success: string;
  public error: string;

  constructor(private route: ActivatedRoute, private _bierService: BierdataService, private _brouwerService: BrouwerdataService, private modalService: NgbModal) {

  }
  ngOnInit() {
    if (this._fetchBrouwer == null) {
      this.route.data.subscribe(items => {
        this._fetchBrouwer = items['brouwer'];
        this._bieren = this._fetchBrouwer.bieren;
      });
    }
    console.log(this._bieren);
    console.log(this._fetchBrouwer);
  }

  close() {
    this.success = null;
    this.error = null;
  }

  closeModal() {
    this._brouwerService.getBrouwer$(this._fetchBrouwer.id).subscribe(
      (val) => {
        this._fetchBrouwer = val;
        this._bieren = this._fetchBrouwer.bieren;
      }
    )
  }

  get admin(): boolean {
    return this._admin;
  }

  open(bier: Bier) {
    const modalRef = this.modalService.open(EditbierComponent, { centered: true });
    modalRef.componentInstance.bier = bier;
    modalRef.componentInstance.brouwer = this.brouwer;

    modalRef.result.then((result) => {
      if (result == "Save") {
        this.success = "Het bier is met success aangepast"
        this.closeModal();
      } else if (result == "Unsave") {

        this.error = "Het bier is niet gewijzigd";
        this.closeModal();
      }
    });
  }

  delete(bier: Bier) {
    this._bierService.verwijderBier$(bier).subscribe(
      () => {
        this.remove(bier);
        this.success = "Het bier is met succes verwijderd";
      }, (err: HttpErrorResponse) => {
        if (err) {
          this.error = "Het bier is niet verwijderd";
        }
      });
  }

  remove(bier: Bier) {
    const index: number = this._bieren.indexOf(bier);
    if (index !== -1) {
      this._bieren.splice(index, 1);
    }
  }

  get brouwer() {
    return this._fetchBrouwer;
  }

  get brouwerbieren() {
    return this._bieren;
  }
}
