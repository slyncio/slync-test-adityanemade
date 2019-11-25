import { Component } from '@angular/core';
import {TwitterService} from './twitter.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  myTimeline: any;

  constructor(private api: TwitterService) {}

  ngOnInit() {
   this.getTwitterTimeline();
  }

  // This method gets home feeds of the user whose API key is used for this application
  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline.data;
          console.log(this.myTimeline);
        }
      )
   }

   // This method gets searches topics and
   getTweets(searchTweet:string) {
     console.log(searchTweet);
     this.api.getSearch(searchTweet)
       .subscribe(
         myTimeline => {
           this.myTimeline = myTimeline.data.statuses;
           console.log(this.myTimeline);
         }
       )
    }

    // This method gets the feeds of the specified handle
    getUserTweets(searchUserTweet:string) {
      console.log(searchUserTweet);
      this.api.getUserTimeline(searchUserTweet)
        .subscribe(
          myTimeline => {
            this.myTimeline = myTimeline.data;
            console.log(this.myTimeline);
          }
        )
     }
}
