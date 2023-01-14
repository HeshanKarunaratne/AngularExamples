import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: any = [];
  constructor(http: HttpClient) {
    http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        console.log(response);
        this.posts = response;
      })
  }
}
