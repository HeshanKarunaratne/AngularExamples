import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',

  styles: [
    `
    .star-color {
      font-size: 5rem;
    }
    .star-color-red {
    color: green;
    }
    `
  ],
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  @Input("is-favourite") isFavourite: boolean = false;
  @Output() change = new EventEmitter();

  onClickButton() {
    this.isFavourite = !this.isFavourite;
    this.change.emit({ value: this.isFavourite, name: "heshan" });
  }
}
