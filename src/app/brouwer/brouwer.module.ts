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
import { AuthGuard } from '../user/auth.guard';
import { BierResolver } from './BierResolver';


const routes: Routes = [
  { path: "lijst", component: BierlijstComponent, resolve: { bieren: BierResolver } },
  { path: "voegtoe", canActivate: [AuthGuard], component: AddbierComponent }

];

@NgModule({
  declarations: [BierComponent, BrouwerComponent, BierlijstComponent, BierfilterPipe, AddbierComponent, DetailbierComponent],
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
