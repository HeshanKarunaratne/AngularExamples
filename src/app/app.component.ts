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
}