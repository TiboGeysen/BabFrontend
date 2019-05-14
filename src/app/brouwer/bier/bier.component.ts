import { Component, OnInit, Input } from '@angular/core';
import { Bier } from '../bier.model';
import { MatDialog } from '@angular/material';
import { DetailbierComponent } from '../detailbier/detailbier.component';
import { Brouwer } from '../brouwer.model';
import { Observable } from 'rxjs';
import { BierdataService } from '../bierdata.service';

@Component({
  selector: 'app-bier',
  templateUrl: './bier.component.html',
  styleUrls: ['./bier.component.css']
})

export class BierComponent implements OnInit {
  @Input() public bier: Bier;
  @Input() public brouwer: Brouwer;


  constructor(public dialog: MatDialog, private _bierService: BierdataService) {

  }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(DetailbierComponent, { data: this.bier });
  }

  add() {
    this._bierService.voegBierAanFavorietenToe$(this.bier).subscribe();
  }

}
