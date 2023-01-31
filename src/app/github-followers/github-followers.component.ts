import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { combineLatest, switchMap, map } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];
  constructor(private service: GithubService, private route: ActivatedRoute) { }

  ngOnInit() {

    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(switchMap(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get("page");
        return this.service.getAll()
      }))
      .subscribe(followers => this.followers = followers)
  }
}