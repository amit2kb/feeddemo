import { Component, OnInit } from '@angular/core';
import { LiveFeed } from 'src/app/models/livefeed';
import { LiveFeedService } from 'src/app/services/livefeed.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent implements OnInit {
  livefeeds: LiveFeed[];
  livefeed = new LiveFeed();
  submitted = false;
  constructor(
    private livefeedService: LiveFeedService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.livefeedService.viewLivefeed(id)
      .subscribe(livefeed => this.livefeed = livefeed);
  }

  goBack(): void {
    this.location.back();
  }
  
}
