import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiveFeed } from '../../app/models/livefeed';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LiveFeedService {
  private livefeedsUrl = 'http://localhost:8080/api/livefeeds';  // URL to web api
  constructor( 
    private http: HttpClient
  ) { }

  getLivefeeds (): Observable<LiveFeed[]> {
    return this.http.get<LiveFeed[]>(this.livefeedsUrl)
  }

  getLivefeed(id: number): Observable<LiveFeed> {
    const url = `${this.livefeedsUrl}/${id}`;
    return this.http.get<LiveFeed>(url);
  }
  viewLivefeed(id: number): Observable<LiveFeed> {
    const url = `${this.livefeedsUrl}/${id}`;
    return this.http.get<LiveFeed>(url);
  }


  addLivefeed (livefeed: LiveFeed): Observable<LiveFeed> {
    return this.http.post<LiveFeed>(this.livefeedsUrl, livefeed, httpOptions);
  }

  deleteLivefeed (livefeed: LiveFeed | number): Observable<LiveFeed> {
    const id = typeof livefeed === 'number' ? livefeed : livefeed.id;
    const url = `${this.livefeedsUrl}/${id}`;

    return this.http.delete<LiveFeed>(url, httpOptions);
  }

  updateLivefeed (livefeed: LiveFeed): Observable<any> {
    return this.http.put(this.livefeedsUrl, livefeed, httpOptions);
  }
}