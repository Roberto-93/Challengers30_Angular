import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleBlogRoutingModule } from './simple-blog-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { CreatePostComponent } from './create-post/create-post.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent,
    CreatePostComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SimpleBlogRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class SimpleBlogModule { }
