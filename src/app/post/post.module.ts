import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostComponent } from './addpost/addpost.component';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [AddpostComponent, PostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [AddpostComponent, PostComponent]
})
export class PostModule { }
