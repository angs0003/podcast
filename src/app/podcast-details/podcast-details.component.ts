import { Component, OnInit, Input } from '@angular/core';
import { PodcastFetchService } from '../podcast-fetch.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PodcastPagesComponent } from '../podcast-pages/podcast-pages.component';
import { Podcast } from '../podcast';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-podcast-details',
  template: `
  <div class="wrapper">
  <h1 class="podcast-title">Podcasts</h1>
  <input class="search-bar" type="text" placeholder="Search Podcast">
  </div>
  <div class="container">
    
   <div *ngFor="let podcast of data.podcasts"> 
   
   <ul> 
   <li class="box">
   <h2 class="title"> {{podcast.title}}</h2>
   <img [ngClass]='image' [src]='podcast.image'>
   <p> Total Podcast Episodes: {{podcast.total_episodes}} </p>
   <p> Publisher: {{podcast.publisher}}</p>
   <a [routerLink]="['/details', podcast.id]">Check out Episodes</a>
   </li>
   </ul>
   <div *ngIf="data">
  <!--<app-podcast-pages [podcastData]="data"></app-podcast-pages> -->
  </div>
   </div>
  </div>`,
  styleUrl: './podcast-details.component.css'
})
export class PodcastDetailsComponent implements OnInit {
  // const header = {'API-Key', ''};
  // siteUrl = 'https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&sort=listen_score&safe_mode=0'
  data: any;
  // @Input() podcastData!: Podcast;
  // podcastDetails!: { podcastId: string; title: string; image: string; publisher: string};
 
  
  // constructor(private podcastService: PodcastFetchService){}
  // ngOnInit(): void {
  // const podcastId = '';
  // this.podcastService.getPodcastById(podcastId).subscribe(data =>
  
  //   this.podcastData = data)
  // }
  // headers and api url commented
//   httpOptions = {
//    headers : new HttpHeaders({
//     // 'Content-Type': 'application/json',
//     'X-ListenAPI-Key': '1f72e4e582d24553afb5e549323a1619' // bad practice
//   })
// };

  // siteUrl = 'https://jsonplaceholder.typicode.com/todos/1' // Test
  // constructor(private http: HttpClient){}
  constructor(private podcastService: PodcastService ){}
  ngOnInit(): void {
      // this.http.get(this.siteUrl, this.httpOptions).subscribe((response) => this.data = response)
      this.podcastService.getPocastByGenre(93).subscribe((response) => {
        this.data = response
      });
    }
  
  title = "Darknet Diaries";
  artist = "Jackery Syder"
  container = 'container';
  image = 'image';
  src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis2-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic113%2Fv4%2F3c%2F1d%2F6b%2F3c1d6bb8-246f-6895-112c-a2ecc3f5f547%2Fsource%2F1200x1200bb.png&f=1&nofb=1&ipt=dc6e1a8b13e3f2d9ef1b12880f065131b5cc921862f79b3a1b0ff2b8ad379252&ipo=images"
}

