import { Component, OnInit } from '@angular/core';
import { LiveFeed } from 'src/app/models/livefeed';
import { LiveFeedService } from 'src/app/services/livefeed.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-edit-feed',
  templateUrl: './edit-feed.component.html',
  styleUrls: ['./edit-feed.component.scss']
})
export class EditFeedComponent implements OnInit {

  livefeed = new LiveFeed();
  submitted = false;
  message: string;
  constructor(
    private livefeedService: LiveFeedService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.livefeedService.getLivefeed(id)
      .subscribe(livefeed => this.livefeed = livefeed);
  }

  update(): void {
    this.submitted = true;
    this.livefeedService.updateLivefeed(this.livefeed)
        .subscribe(result => this.message = "Feed Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.livefeedService.deleteLivefeed(this.livefeed.id)
        .subscribe(result => this.message = "Feed Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}
