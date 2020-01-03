import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brouwer } from 'src/app/brouwer/brouwer.model';
import { BrouwerdataService } from 'src/app/brouwer/brouwerdata.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditbrouwerComponent } from 'src/app/brouwer/editbrouwer/editbrouwer.component';
import { DetailaddbierComponent } from 'src/app/brouwer/detailaddbier/detailaddbier.component';

@Component({
  selector: 'app-adminbeheerlijst',
  templateUrl: './adminbeheerlijst.component.html',
  styleUrls: ['./adminbeheerlijst.component.css']
})
export class AdminbeheerlijstComponent implements OnInit {

  public _fetchBrouwers: Brouwer[];
  success: string;
  error: string;


  constructor(private route: ActivatedRoute, private _service: BrouwerdataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.route.data.subscribe(items => {
      {
        this._fetchBrouwers = items['brouwers'];
      }
    })
  }

  get brouwers$() {
    return this._fetchBrouwers;
  }

  bieren$(brouwer: Brouwer) {
    return brouwer.bieren;
  }


  open(brouwer: Brouwer) {
    const modalRef = this.modalService.open(EditbrouwerComponent, { centered: true });
    modalRef.componentInstance.brouwer = brouwer;

    modalRef.result.then((result) => {
      if (result == "Save") {
        this.success = "De brouwer is met success aangepast"
        this.closeModal();
      } else if (result == "Unsave") {

        this.error = "De brouwer is niet gewijzigd";

        this.closeModal();
      }
    });
  }

  addbier(brouwer: Brouwer) {
    //modal to add bier for certain brewer => add
    const modalRef = this.modalService.open(DetailaddbierComponent, { centered: true });
    modalRef.componentInstance.brouwer = brouwer;

    modalRef.result.then((result) => {
      if (result == "Save") {
        this.success = "Het bier voor " + brouwer.naam + " is met success aangemaakt"
        this.closeModal();
      } else if (result == "Unsave") {

        this.error = "Het bier is niet aangemaakt";

        this.closeModal();
      }
    });
  }

  delete(brouwer: Brouwer) {
    this._service.verwijderBrouwer$(brouwer).subscribe(
      () => {
        this.remove(brouwer);
        this.success = "De brouwer is met succes verwijderd";
      }, (err: HttpErrorResponse) => {
        if (err) {
          this.error = "De brouwer is niet verwijderd";
        }
      });
  }

  remove(brouwer: Brouwer) {
    const index: number = this._fetchBrouwers.indexOf(brouwer);
    if (index !== -1) {
      this._fetchBrouwers.splice(index, 1);
    }
  }

  close() {
    this.success = null;
    this.error = null;
  }

  closeModal() {
    this._service.brouwers$.subscribe(
      (val) => {
        this._fetchBrouwers = val;
      }
    )
  }

}
