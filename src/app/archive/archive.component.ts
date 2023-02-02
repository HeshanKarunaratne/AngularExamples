import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }
  year: any;
  month: any;
  ngOnInit(): void {
    let year = this.route.snapshot.paramMap.get('year');
    let month = this.route.snapshot.paramMap.get('month');

    this.year = year;
    this.month = month;
    console.log("year: " + year);
    console.log("month: " + month);
  }

  goBack() {
    this.router.navigate(['']);
  }

}
