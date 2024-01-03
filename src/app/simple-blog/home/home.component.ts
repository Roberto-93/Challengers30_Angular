import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from '../create-post/create-post.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectedPost: Post | null = null;

  onSelectPost(post: Post) {
    this.selectedPost = post;

  }

  // selectedPost = null;

  constructor(public dialog: MatDialog) {}

  openCreatePostDialog() {
    const dialogRef = this.dialog.open(CreatePostComponent, {
      width: '400px'
      // qui puoi passare eventuali dati al dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Il dialog è stato chiuso');
      // Gestisci il risultato qui (ad esempio, aggiorna la lista dei post)
    });
  }

}
