import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpostComponent } from './addpost/addpost.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostlijstComponent } from './postlijst/postlijst.component';
import { PostfilterPipe } from './postfilter.pipe';

import { MaterialModule } from './../material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { PostResolver } from './PostResolver';

const routes: Routes = [
  { path: '', component: PostlijstComponent, resolve: { posts: PostResolver } },
];

@NgModule({
  declarations: [AddpostComponent, PostComponent, PostlijstComponent, PostfilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [AddpostComponent, PostComponent, RouterModule]
})
export class PostModule { }
