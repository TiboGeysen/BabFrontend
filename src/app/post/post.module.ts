import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostComponent } from './addpost/addpost.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddpostComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AddpostComponent]
})
export class PostModule { }
