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


const routes: Routes = [
  { path: "bieren", component: BierlijstComponent }
]

@NgModule({
  declarations: [BierComponent, BrouwerComponent, BierlijstComponent, BrouwerfilterPipe, BierfilterPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BrouwerModule { }
