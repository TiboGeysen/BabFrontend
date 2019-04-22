import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bier } from '../bier.model';

@Component({
  selector: 'app-detailbier',
  templateUrl: './detailbier.component.html',
  styleUrls: ['./detailbier.component.css']
})
export class DetailbierComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Bier) { }

  ngOnInit() {
  }

}
