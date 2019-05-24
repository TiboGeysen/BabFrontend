import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { PagenotfoundComponent } from '../components/pagenotfound/pagenotfound.component';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';
import { ForbiddenComponent } from '../components/forbidden/forbidden.component';
import { AuthGuard } from '../user/auth.guard';

const appRoutes: Routes = [

  {
    path: 'home',
    loadChildren: '../../app/post/post.module#PostModule',
    data: { preload: true }
  },

  {
    path: 'bier',
    loadChildren: '../../app/brouwer/brouwer.module#BrouwerModule',
    data: { preload: true }
  },

  {
    path: 'account',
    loadChildren: '../../app/account/account.module#AccountModule',
    data: { preload: true },
    canActivate: [AuthGuard]

  },

  {
    path: 'forbidden', component: ForbiddenComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: SelectivePreloadStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
