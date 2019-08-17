import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivefeedComponent } from './components/livefeed/livefeed.component';
import { AddlivefeedComponent } from './components/addlivefeed/addlivefeed.component';
import { FeedDetailComponent } from './components/feed-detail/feed-detail.component';
import { EditFeedComponent } from './components/edit-feed/edit-feed.component';



const routes: Routes = [
  { 
    path: 'livefeeds', 
    component: LivefeedComponent 
  },
  { 
    path: 'livefeeds/add', 
    component: AddlivefeedComponent 
  },
  { 
    path: 'livefeeds/view/:id', 
    component: FeedDetailComponent 
  },
  { 
    path: 'livefeeds/:id', 
    component: EditFeedComponent 
  },
  { 
    path: '', 
    redirectTo: 'livefeeds', 
    pathMatch: 'full'
  }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}