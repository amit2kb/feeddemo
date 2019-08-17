import { Component, OnInit } from '@angular/core';
import { LiveFeed } from 'src/app/models/livefeed';
import { LiveFeedService } from 'src/app/services/livefeed.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-addlivefeed',
  templateUrl: './addlivefeed.component.html',
  styleUrls: ['./addlivefeed.component.scss']
})
export class AddlivefeedComponent {
  livefeed = new LiveFeed();
  submitted = false;
  constructor(
    private livefeedService: LiveFeedService,
    private location: Location) { }

    newlivefeed(): void {
      this.submitted = false;
      this.livefeed = new LiveFeed();
    }
  
   addLivefeed() {
     this.submitted = true;
     this.save();
   }
  
    goBack(): void {
      this.location.back();
    }
  
    private save(): void {
      console.log(this.livefeed);
      this.livefeedService.addLivefeed(this.livefeed)
          .subscribe();
    }

}
