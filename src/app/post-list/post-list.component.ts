import { Component } from '@angular/core';
import { Post } from '../types/post';
import { ApiService } from '../api.service';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  constructor(private apiService: ApiService) {}

  posts: Post[] = [];
  isLoader = true;

  ngOnInit() {
    this.apiService.getPosts(5).subscribe((post) => {
      console.log(post);
      this.posts = post;
      this.isLoader = false;
    });
  }
}
