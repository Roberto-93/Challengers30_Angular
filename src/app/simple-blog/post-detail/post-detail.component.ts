import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
