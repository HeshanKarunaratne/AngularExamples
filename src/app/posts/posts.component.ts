import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
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
    this.service.getAll()
      .subscribe(
        response => {
          console.log(response);
          this.posts = response;
        })
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";

    this.service.create(post)
      .subscribe(
        response => {
          let id = (response as any).id;
          post['id'] = id;
          this.posts.splice(0, 0, post);
        },
        (error: AppError) => {
          if (error instanceof BadInput) {
            //this.form.setErrors(error.json())
          }
          else throw error;
        });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      })
  }

  deletePost(post: any) {
    this.service.delete(post.id)
      .subscribe(
        response => {
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert("This post has already been deleted");
          else throw error;
        })
  }
}
