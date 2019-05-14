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


const routes: Routes = [
  { path: "lijst", component: BierlijstComponent, resolve: { bieren: BierResolver, brouwers: BrowerResolver } },
];

@NgModule({
  declarations: [BierComponent, BrouwerComponent, BierlijstComponent, BierfilterPipe, AddbierComponent, DetailbierComponent, MaxDirective, MinDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],

  exports: [BierfilterPipe, BierComponent, DetailbierComponent, RouterModule, AddbierComponent],
  entryComponents: [DetailbierComponent]
})
export class BrouwerModule { }
