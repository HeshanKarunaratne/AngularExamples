import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
          console.log(response);
          this.posts = response;
        },
        error => {
          alert("An Unexpected Error occurred.");
          console.log(error);
        })
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";

    this.service.createPost(post)
      .subscribe(
        response => {
          let id = (response as any).id;
          post['id'] = id;
          this.posts.splice(0, 0, post);
        },
        (error: Response) => {
          if (error.status === 400) {
            //this.form.setErrors(error.json())

          } else {
            alert("An Unexpected Error occurred.");
            console.log(error);
          }
        });
  }

  updatePost(post: any) {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      }, error => {
        alert("An Unexpected Error occurred.");
        console.log(error);
      })
  }

  deletePost(post: any) {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: Response) => {
          if (error.status === 404)
            alert("This post has already been deleted");
          else {
            alert("An Unexpected Error occurred.");
            console.log(error);
          }
        })
  }
}
