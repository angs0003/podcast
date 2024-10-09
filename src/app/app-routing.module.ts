
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodcastDetailsComponent } from './podcast-details/podcast-details.component';
import { PodcastPagesComponent } from './podcast-pages/podcast-pages.component';

const routes: Routes = [
  { path: '', component: PodcastDetailsComponent},
  { path: 'details/:id', component: PodcastPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PodcastDetailsComponent, PodcastPagesComponent]
