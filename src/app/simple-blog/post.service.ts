import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private initialPosts: Post[] = [
    { 
      id: 1, 
      title: 'Primo Post', 
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYah9hubBlVFmvEI-OZ6OtyLpOICIaS9wmA&usqp=CAU',
      content: 'Questo è il contenuto del primo post.', 
      author: 'Autore 1',
      date: new Date('2023-01-01') // Aggiungi una data di esempio
    },
    { 
      id: 2, 
      title: 'Secondo Post', 
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCd3hBXk3Qu8AgHu-yFuw0_D8vfq5b5TeyEA&usqp=CAU',
      content: 'Questo è il contenuto del secondo post.', 
      author: 'Autore 2',
      date: new Date('2023-01-02') // Aggiungi una data di esempio
    }
    // Aggiungi qui altri post
  ];
  private posts: BehaviorSubject<Post[]> = new BehaviorSubject(this.initialPosts);

  constructor() {
    // Qui potresti caricare i dati iniziali se necessario
  }

  getPosts(): Observable<Post[]> {
    return this.posts.asObservable();
  }

  getPostById(id: number): Post | undefined {
    return this.posts.getValue().find(post => post.id === id);
  }

  createPost(newPost: Post): void {
    const currentPosts = this.posts.getValue();
    this.posts.next([...currentPosts, { ...newPost, id: this.generateId() }]);
  }

  updatePost(id: number, updatedPost: Post): void {
    const currentPosts = this.posts.getValue();
    const postIndex = currentPosts.findIndex(post => post.id === id);
    if (postIndex !== -1) {
      currentPosts[postIndex] = { ...updatedPost, id };
      this.posts.next([...currentPosts]);
    }
  }

  deletePost(id: number): void {
    let currentPosts = this.posts.getValue();
    currentPosts = currentPosts.filter(post => post.id !== id);
    this.posts.next([...currentPosts]);
  }

  private generateId(): number {
    // Genera un semplice ID. In una vera app, l'ID verrebbe creato dal backend.
    return Math.random();
  }
}
