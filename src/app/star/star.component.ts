import { Component } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent {
  isClicked = true;
  color: string = "";
  onClickText() {
    this.isClicked ? this.color = "red" : this.color = "blue";
    this.isClicked = !this.isClicked;
  }
}
