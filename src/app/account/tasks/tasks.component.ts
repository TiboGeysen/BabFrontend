import { Component, OnInit } from '@angular/core';

import { Packer } from 'docx';
import * as fs from 'file-saver';
import { DocumentCreator } from './boek-generator';
import { ActivatedRoute } from '@angular/router';
import { Brouwer } from 'src/app/brouwer/brouwer.model';
import { BrouwerdataService } from 'src/app/brouwer/brouwerdata.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  private _brouwers: Brouwer[];
  constructor(private route: ActivatedRoute, private _brouwerService: BrouwerdataService) { }

  ngOnInit() {
    this.route.data.subscribe(items => {
      this._brouwers = items['brouwers'];
    })
  }

  public download(): void {

    let docCreator = new DocumentCreator();
    let aanwezig: Brouwer[];

    //enkel brouwers die aanwezig zijn en enkel de bieren die ze meebrengen
    aanwezig = this._brouwers.filter(obj => obj.bieren.length != 0)

    for (let x of aanwezig) {
      x.bieren = x.bieren.filter(obj => obj.aanwezig == true)
    }

    aanwezig = aanwezig.sort((a, b) => a.stand - b.stand)


    let doc = docCreator.create(aanwezig);
    Packer.toBlob(doc).then(blob => {
      fs.saveAs(blob, "My doc.docx");
    })
  }

}

/*
// Used to export the file into a .docx file
        Packer.toBuffer(doc).then((buffer) => {
            fs.writeFileSync("My Document.docx", buffer);
        });*/
