import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivefeedComponent } from './components/livefeed/livefeed.component';
import { AddlivefeedComponent } from './components/addlivefeed/addlivefeed.component';
import { FeedDetailComponent } from './components/feed-detail/feed-detail.component';
import { EditFeedComponent } from './components/edit-feed/edit-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LivefeedComponent,
    AddlivefeedComponent,
    FeedDetailComponent,
    EditFeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
