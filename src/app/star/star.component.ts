import { Component, Input } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent {
  @Input() isFavourite: boolean = false;

  onClickButton() {
    this.isFavourite = !this.isFavourite;
  }
}
