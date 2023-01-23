import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.scss']
})
export class GithubFollowersComponent implements OnInit {
  followers: any = [];
  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        followers => {
          console.log(followers);
          this.followers = followers;
        })
  }
}
