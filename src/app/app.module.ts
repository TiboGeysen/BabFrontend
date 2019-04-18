import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { EvenementenpageComponent } from './components/evenementenpage/evenementenpage.component';
import { BiervdmaandComponent } from './components/biervdmaand/biervdmaand.component';
import { HistoriepageComponent } from './components/historiepage/historiepage.component';
import { ZoekpageComponent } from './components/zoekpage/zoekpage.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginpageComponent },
  { path: 'registreer', component: RegisterpageComponent },
  { path: 'evenementen', component: EvenementenpageComponent },
  { path: 'biervdmaand', component: BiervdmaandComponent },
  { path: 'historie', component: HistoriepageComponent },
  { path: 'zoek', component: ZoekpageComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    LoginpageComponent,
    RegisterpageComponent,
    EvenementenpageComponent,
    BiervdmaandComponent,
    HistoriepageComponent,
    ZoekpageComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
