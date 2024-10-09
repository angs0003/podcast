import { Component } from '@angular/core';
import { PodcastDetailsComponent } from './podcast-details/podcast-details.component';
import { RouterLink } from '@angular/router';
import { PodcastPagesComponent } from './podcast-pages/podcast-pages.component';

@Component({
  selector: 'app-root',
  template: `
  <body>
    <!--<app-podcast-details></app-podcast-details>-->
       <router-outlet></router-outlet>
    </body>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Podcast';
}
export const routingComponents = [PodcastPagesComponent, PodcastDetailsComponent]