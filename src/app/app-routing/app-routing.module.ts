import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from '../components/homepage/homepage.component';
import { BiervdmaandComponent } from '../components/biervdmaand/biervdmaand.component';
import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { LandingpageComponent } from '../components/landingpage/landingpage.component';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';
import { ForbiddenComponent } from '../components/forbidden/forbidden.component';
import { AuthGuard } from '../user/auth.guard';
import { AccountComponent } from '../account/account/account.component';
import { AddbierComponent } from '../brouwer/addbier/addbier.component';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'biervdmaand', component: BiervdmaandComponent },
  {
    path: 'bier',
    loadChildren: '../../app/brouwer/brouwer.module#BrouwerModule',
    data: { preload: true }

  },

  {
    path: 'account',
    loadChildren: '../../app/account/account.module#AccountModule',
    data: { preload: true },
    //canActivate: [AuthGuard]

  },
  {
    path: 'forbidden', component: ForbiddenComponent
  },
  { path: '', component: LandingpageComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
