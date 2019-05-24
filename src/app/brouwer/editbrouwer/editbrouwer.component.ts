import { Component, OnInit, Input } from '@angular/core';
import { BrouwerdataService } from '../brouwerdata.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Brouwer } from '../brouwer.model';

@Component({
  selector: 'app-editbrouwer',
  templateUrl: './editbrouwer.component.html',
  styleUrls: ['./editbrouwer.component.css']
})
export class EditbrouwerComponent implements OnInit {

  @Input() public brouwer: Brouwer;
  error: string;
  success: string;


  public brouwerForm: FormGroup;


  constructor(private _service: BrouwerdataService, public activeModal: NgbActiveModal) { }

  ngOnInit() {


    this.brouwerForm = new FormGroup({
      naam: new FormControl(this.brouwer.naam, [Validators.required, Validators.maxLength(30), Validators.minLength(1)]),
      stand: new FormControl(this.brouwer.stand, [Validators.required, Validators.max(999), Validators.min(0)]),
    })
  }

  close() {
    this.error = null;
    this.success = null;
  }

  edit() {
    //edit stuff
    let brouwer = new Brouwer(this.brouwerForm.value.naam, this.brouwer.bieren, this.brouwerForm.value.stand);
    brouwer.id = this.brouwer.id;

    this._service.editBrouwer$(brouwer).subscribe(
      (val) => {
        this.activeModal.close('Save');
        console.log(val);
      }, err => {
        this.activeModal.close('Unsave');
      }
    );
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Veld is verplicht in te vullen';
    } else if (errors.minlength) {
      return `Te kort, minimaal ${errors.minlength.requiredLength} karakaters, u heeft er ${errors.minlength.actualLength}`;
    }
    else if (errors.maxlength) {
      return `Te lang, maximaal ${errors.maxlength.requiredLength} karakaters, u heeft er ${errors.maxlength.actualLength}`;
    }
    else if (errors.min) {
      return `Te laag, minimale stand bedraagt 0, uw stand is ${errors.min.actual}`;
    }
    else if (errors.max) {
      return `Te hoog, maximale stand bedraagt 999, uw stand is ${errors.max.actual}`;
    }
  }

}
