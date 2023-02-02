import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  archiveDates = [
    { key: 1, year: 2017, month: 1 },
    { key: 2, year: 2017, month: 2 },
    { key: 3, year: 2017, month: 3 },
  ]
}
