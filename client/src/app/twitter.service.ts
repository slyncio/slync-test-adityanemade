import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  api_url = 'http://localhost:3000';
  parameter: URLSearchParams = new URLSearchParams();

  constructor(private http: HttpClient) { }

  // This method gets home feeds of the user whose API key is used for this application
  getTimeline() {
    return this.http
      .get<any>(this.api_url+'/home_timeline')
      .pipe(map(data => data));
  }

  // This method gets searches topics and feeds
  getSearch(searchTweet:string){
    return this.http
      .get<any>(this.api_url+'/search?q='+searchTweet)
      .pipe(map(data => data));
  }

  // This method gets the feeds of the specified handle
  getUserTimeline(searchUserTweet:string){
    return this.http
      .get<any>(this.api_url+'/user_timeline?screen_name='+searchUserTweet)
      .pipe(map(data => data));
  }
}
