import { Routes } from '@angular/router'
import { PodcastDetailsComponent } from './app/podcast-details/podcast-details.component';
import { PodcastPagesComponent } from './app/podcast-pages/podcast-pages.component';

export const routeConfig: Routes =[
    {
        path:'',
        component: PodcastDetailsComponent,
        title: 'Homepage'
    },
    {
        path:'details',
        component: PodcastPagesComponent,
        title: 'Podcast details'
    }
];