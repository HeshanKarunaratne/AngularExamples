import { BadInput } from '../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(catchError((error: Response) => {
      if (error.status === 400)
        return throwError(new BadInput(error.json()));

      return throwError(new AppError(error.json()));
    }));
  }

  updatePost(post: any) {
    return this.http.patch(this.url + "/" + post.id, JSON.stringify({
      isRead: true
    }))
  }

  deletePost(id: any) {
    return this.http.delete(this.url + "/" + id).pipe(catchError((error: Response) => {
      if (error.status === 404)
        return throwError(new NotFoundError());

      return throwError(new AppError(error.json()));
    }));
  }
}
