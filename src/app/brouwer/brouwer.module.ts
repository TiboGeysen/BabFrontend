import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BierComponent } from './bier/bier.component';
import { BrouwerComponent } from './brouwer/brouwer.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { BierlijstComponent } from './bierlijst/bierlijst.component';
import { BrouwerfilterPipe } from './brouwerfilter.pipe';
import { BierfilterPipe } from './bierfilter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddbierComponent } from '../brouwer/addbier/addbier.component';
import { DetailbierComponent } from './detailbier/detailbier.component';
import { AuthGuard } from '../user/auth.guard';
import { MijnbierlijstComponent } from './mijnbierlijst/mijnbierlijst.component';


const routes: Routes = [
  { path: "bieren", component: BierlijstComponent },
  { path: "voegtoe", canActivate: [AuthGuard], component: AddbierComponent },
  { path: "mijnbieren", canActivate: [AuthGuard], component: MijnbierlijstComponent }

]

@NgModule({
  declarations: [BierComponent, BrouwerComponent, BierlijstComponent, BrouwerfilterPipe, BierfilterPipe, AddbierComponent, DetailbierComponent, MijnbierlijstComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [DetailbierComponent]
})
export class BrouwerModule { }
