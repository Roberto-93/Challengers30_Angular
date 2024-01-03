import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Post } from '../models/Post';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService,
    public dialogRef: MatDialogRef<CreatePostComponent>
  ) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      author: ['', Validators.required],
      date: ['', Validators.required],
      imageUrl: [null, Validators.required], // Usa 'imageUrl' invece di 'image'
    });
  }

  onSubmit() {
    if (this.postForm && this.postForm.valid) {
      const post: Post = {
        id: 0, // Assegna un valore appropriato all'ID del post
        title: this.postForm.get('title')?.value,
        content: this.postForm.get('content')?.value,
        author: this.postForm.get('author')?.value,
        date: this.postForm.get('date')?.value,
        image: this.postForm.get('imageUrl')?.value // Usa l'URL dell'immagine
      };
  
      this.postService.createPost(post);
      this.postForm.reset();
      if (this.dialogRef) {
        this.dialogRef.close();
      }
    }
  }
  
  
  
  
  
}
