import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PodcastDetailsComponent } from './podcast-details/podcast-details.component';
import { RouterModule, Routes } from '@angular/router';
import { PodcastPagesComponent } from './podcast-pages/podcast-pages.component';
const routes: Routes = [
  { path: 'home', 
    component: PodcastDetailsComponent,
  children : [
    {path: 'episodes', component: EpisodeListComponent}
  ]},
  { path: 'details', 
    component: PodcastPagesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // PodcastDetailsComponent
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
