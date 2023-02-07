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
    this.year = this.route.snapshot.paramMap.get('year');
    this.month = this.route.snapshot.paramMap.get('month');
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
