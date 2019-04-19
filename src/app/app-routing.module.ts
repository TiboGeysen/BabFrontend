import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { EvenementenpageComponent } from './components/evenementenpage/evenementenpage.component';
import { BiervdmaandComponent } from './components/biervdmaand/biervdmaand.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'evenementen', component: EvenementenpageComponent },
  { path: 'biervdmaand', component: BiervdmaandComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
