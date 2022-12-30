import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: "title",
    isFavourite: true
  }

  onFavouriteChange(eventArgs: object) {
    console.log("favourite changed ", eventArgs);
  }

  tweet = {
    body: "here is the body of the twet...",
    isLiked: false,
    likesCount: 0
  }

  onBtnClicked(args: boolean) {
    console.log("value is ", args);
  }

}