import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Observable, combineLatest } from 'rxjs';

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
      .subscribe(combined => {
        let id = combined[0].get('id');
        let page = combined[1].get("page");

        // this.service.getAll({id: id, page: page})
        //   .subscribe(
        //     followers => {
        //       this.followers = followers;
        //     })

        this.service.getAll()
          .subscribe(
            followers => {
              this.followers = followers;
            })
      })
  }
}
