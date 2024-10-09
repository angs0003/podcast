import { PodcastService } from './../podcast.service';
import {
  Component,
  OnInit,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PodcastDetailsComponent } from '../podcast-details/podcast-details.component';
import { Podcast } from '../podcast';

@Component({
  selector: 'app-podcast-pages',
  template: `
    <!-- <h3> {{podcastData | json}} -->
    <div *ngFor="let pod of podcast.podcasts">
     <div *ngIf="pod.id === podcastId">
      <h3>{{ pod.title }}</h3>
      <img [src]='pod.image'>
      <audio [src] = 'pod.listennotes_url' type="audio/ogg"> Try Listening </audio>
      <!-- <p> {{pod | json}}<p> -->
        <p>Description: {{pod.description}} </p>
      <h3>{{ podcast.listenUrl }}</h3>
      <a [routerLink]="['/detail', podcast.id, 'episodes']">View Episodes</a>
    </div>
</div>
  `,
  styleUrl: './podcast-pages.component.css',
})
export class PodcastPagesComponent implements OnInit {
  podcast: any;
  podcastId: string | null = null;
  // route: ActivatedRoute = inject(ActivatedRoute);
  // podcastId = '';
  // @Input() podcastData!: any;

  // podcastDetails!: {podcastId: string; title: string; listenUrl: string};

  // ngOnChanges(changes: SimpleChanges):void {
  //   if (changes['podcastData']) {
  //     this.podcastDetails = {
  //       podcastId: this.podcastData.podcastId,
  //       title: this.podcastData.title,
  //       listenUrl: this.podcastData.listenUrl

  //     }
  //   }
  // }

  constructor(
    private route: ActivatedRoute,
    private podcastService: PodcastService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.podcastId = params.get('id');
      if (this.podcastId) {
        this.podcastService.getPodcastDetails(this.podcastId).subscribe((data) => {
          this.podcast = data;
        });
      }
    });
  }
  //   this.podcastDetails= {
  //     podcastId: this.route.snapshot.params['id'],
  //     title: this.route.snapshot.params['title'],
  //     listenUrl: this.route.snapshot.params['listennotes_url']
}
// this.podcastId = this.route.snapshot.params['id'];
