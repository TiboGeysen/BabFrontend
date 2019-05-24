import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BierComponent } from './bier/bier.component';
import { BrouwerComponent } from './brouwer/brouwer.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BierlijstComponent } from './bierlijst/bierlijst.component';
import { BierfilterPipe } from './bierfilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddbierComponent } from '../brouwer/addbier/addbier.component';
import { DetailbierComponent } from './detailbier/detailbier.component';
import { BierResolver } from './BierResolver';
import { BrowerResolver } from './BrowerResolver';
import { MaxDirective } from '../directives/MaxDirective';
import { MinDirective } from '../directives/MinDirective';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditbierComponent } from './editbier/editbier.component';
import { BeheerbierComponent } from './beheerbier/beheerbier.component';
import { EditbrouwerComponent } from './editbrouwer/editbrouwer.component';


const routes: Routes = [
  { path: "lijst", component: BierlijstComponent, resolve: { bieren: BierResolver, brouwers: BrowerResolver } },
];

@NgModule({
  declarations: [BierComponent, BrouwerComponent, BierlijstComponent, BierfilterPipe, AddbierComponent, DetailbierComponent, MaxDirective, MinDirective, EditbierComponent, BeheerbierComponent, EditbrouwerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],

  exports: [BierfilterPipe, BierComponent, DetailbierComponent, RouterModule, AddbierComponent, BeheerbierComponent],
  entryComponents: [DetailbierComponent, EditbierComponent, EditbrouwerComponent]
})
export class BrouwerModule { }
