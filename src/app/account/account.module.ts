import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MijnbierlijstComponent } from './mijnbierlijst/mijnbierlijst.component';
import { AuthGuard } from '../user/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { DetailbierComponent } from '../brouwer/detailbier/detailbier.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { BrouwerModule } from '../brouwer/brouwer.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InstellingenComponent } from '../account/instellingen/instellingen.component';
import { BierbeheerComponent } from './bierbeheer/bierbeheer.component';
import { BrouwerbeheerComponent } from './brouwerbeheer/brouwerbeheer.component';
import { BieraddComponent } from './bieradd/bieradd.component';
import { AddbierComponent } from '../brouwer/addbier/addbier.component';
import { PostaddComponent } from './postadd/postadd.component';


const routes: Routes = [
  { path: "mijnbieren", component: MijnbierlijstComponent },
  { path: 'instellingen', component: InstellingenComponent },
  { path: 'addbier', component: BieraddComponent, canActivate: [AuthGuard], data: { toegelaten: ['Admin', 'Brouwer'] } },
  { path: 'addpost', component: PostaddComponent, canActivate: [AuthGuard], data: { toegelaten: ['Admin', 'Brouwer'] } },
  { path: 'bierbeheer', component: BierbeheerComponent, canActivate: [AuthGuard], data: { toegelaten: ['Admin', 'Brouwer'] } },
  { path: 'brouwerbeheer', component: BrouwerbeheerComponent, canActivate: [AuthGuard], data: { toegelaten: ['Admin'] } },

];

@NgModule({
  declarations: [NavigationComponent, MijnbierlijstComponent, InstellingenComponent, BieraddComponent, BierbeheerComponent, BrouwerbeheerComponent, PostaddComponent],
  imports: [
    CommonModule,
    BrouwerModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [DetailbierComponent],
  exports: [RouterModule]
})
export class AccountModule { }
