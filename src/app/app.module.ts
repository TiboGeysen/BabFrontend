import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';

import { HomepageComponent } from './components/homepage/homepage.component';
import { EvenementenpageComponent } from './components/evenementenpage/evenementenpage.component';
import { BiervdmaandComponent } from './components/biervdmaand/biervdmaand.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MaterialModule } from './material/material.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    BiervdmaandComponent,
    EvenementenpageComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
