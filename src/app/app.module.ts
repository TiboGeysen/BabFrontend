import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { HomepageComponent } from './components/homepage/homepage.component';
import { BiervdmaandComponent } from './components/biervdmaand/biervdmaand.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { MaterialModule } from './material/material.module';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './http-interceptors';
import { PostModule } from './post/post.module';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    BiervdmaandComponent,
    PagenotfoundComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    UserModule,
    PostModule,
    AppRoutingModule


  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
