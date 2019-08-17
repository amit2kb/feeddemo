import { Component, OnInit } from '@angular/core';
import { LiveFeed } from '../../models/livefeed';
import { LiveFeedService } from '../../services/livefeed.service';

@Component({
  selector: 'app-livefeed',
  templateUrl: './livefeed.component.html',
  styleUrls: ['./livefeed.component.scss']
})
export class LivefeedComponent implements OnInit {
  livefeeds: LiveFeed[];
  constructor(private livefeedService: LiveFeedService) { }

  ngOnInit(): void {
    this.getLivefeeds();
 }

 getLivefeeds() {
   return this.livefeedService.getLivefeeds()
              .subscribe(
                livefeed => {
                 console.log(livefeed);
                 this.livefeeds = livefeed
                }
               );
}

}
