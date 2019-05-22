import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthGuard } from '../user/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { DetailbierComponent } from '../brouwer/detailbier/detailbier.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';
import { BrouwerModule } from '../brouwer/brouwer.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InstellingenComponent } from '../account/instellingen/instellingen.component';
import { AddbierComponent } from '../brouwer/addbier/addbier.component';
import { AccountComponent } from './account/account.component';
import { AddpostComponent } from '../post/addpost/addpost.component';
import { PostModule } from '../post/post.module';
import { MijnbierenComponent } from './mijnbieren/mijnbieren.component';
import { MijnBierResolver } from './MijnBierResolver';
// import { BrowerResolver } from '../brouwer/BrowerResolver';

import { RatingComponent } from './rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MijnBrouwersResolver } from './MijnBrouwersResolver';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [{ path: 'instellingen', component: InstellingenComponent },
    { path: "mijnbieren", component: MijnbierenComponent, canActivate: [AuthGuard], resolve: { mijnbieren: MijnBierResolver, mijnbrouwers: MijnBrouwersResolver } },
    { path: 'addpost', component: AddpostComponent, canActivate: [AuthGuard], data: { toegelaten: ['Admin'] } },
    { path: 'addbier', component: AddbierComponent, canActivate: [AuthGuard], data: { toegelaten: ['Admin', 'Brouwer'] } },
      //{ path: 'bierbeheer', component: BierbeheerComponent, canActivate: [AuthGuard], data: { toegelaten: ['Admin', 'Brouwer'] } },
      //{ path: 'brouwerbeheer', component: BrouwerbeheerComponent, canActivate: [AuthGuard], data: { toegelaten: ['Admin'] } },
    ]
  }

];

@NgModule({
  declarations: [NavigationComponent, InstellingenComponent, AccountComponent, MijnbierenComponent, RatingComponent],
  imports: [
    CommonModule,
    PostModule,
    BrouwerModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [DetailbierComponent],
  exports: [RouterModule, InstellingenComponent]
})
export class AccountModule { }
