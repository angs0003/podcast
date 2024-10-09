import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Podcast } from './podcast';
import { tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PodcastFetchService {
  // http = inject(HttpClient); // Old way of dependencies injection 
// constructor(http: HttpClient){
private cache: any = null;
private siteUrl = 'https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&sort=listen_score&safe_mode=0'
private httpOptions = {
   headers : new HttpHeaders({
    // 'Content-Type': 'application/json',
    'X-ListenAPI-Key': '1f72e4e582d24553afb5e549323a1619' // bad practice
  }),
}
constructor(private http: HttpClient){}
  getPodcast(): Observable<any>{
    // const url =`${this.siteUrl}/${id}
    if (this.cache) {
      return of(this.cache);
    } else {
      return this.http.get(this.siteUrl, this.httpOptions).pipe(
        tap(data => this.cache = data)
      );
      
    }
    // return this.http.get<Podcast>(`${this.siteUrl}/${id}`);
  }
}

