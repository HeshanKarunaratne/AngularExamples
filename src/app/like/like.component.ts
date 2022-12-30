import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent {
  @Input("isLiked") isLiked: boolean = false;
  @Input("likesCount") likesCount: number = 0;
  @Output("change") change = new EventEmitter();

  onFavouriteClick() {
    this.isLiked ? this.likesCount-- : this.likesCount++;
    this.isLiked = !this.isLiked;
    this.change.emit(this.isLiked);
  }


}
