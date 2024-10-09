import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { tap } from 'rxjs/operators'
import { CacheService } from './cache.service';


@Injectable({
  providedIn: 'root'
})
export class PodcastService {
  private cacheKey = 'best_podcasts';
  private apiUrl = 'https://listen-api.listennotes.com/api/v2/best_podcasts?genre_id=93&page=2&region=us&sort=listen_score&safe_mode=0'
  private cacheTTL = 36000000;
  private apiKey =  '1f72e4e582d24553afb5e549323a1619';
  private cache: { [key: string]: any } = {};
  private httpOptions = {
   headers : new HttpHeaders({
    'X-User-Id': 1683,
    'X-ListenAPI-Key': '26120338ac9520b4084864651b07678d08dfa96c1e9f57be34d7b2e74b54be18828089b848542c96d96f0732c3ca62ec86' // bad practice
  }),
}
  constructor(private http: HttpClient, private cacheService: CacheService) { }
  // getPodcast(): Observable<any> {
  //   const cacheData = this.cacheService.get(this.cacheKey);
  //   if (cacheData) {
  //     return of(cacheData);
  //   } else {
  //     return this.http.get(this.apiUrl, this.httpOptions).pipe(
  //       tap(data=> this.cacheService.set(this.cacheKey, data, this.cacheTTL))
  //     );
  //   }
  // }
  getPocastByGenre(genreId: number): Observable<any> {
   
    const cacheKey = `genre_${genreId}`;
    if (this.cache[cacheKey]){
      return of(this.cache[cacheKey]);
    } else {
      return this.http.get<any>(`${this.apiUrl}genre/${genreId}/podcasts`, {
        headers: {
          'X-ListenAPI-Key': this.apiKey
        }
      }).pipe( 
        tap(response => {
          this.cache[cacheKey] = response;
        })
      );
    }
  }
  getPodcastDetails(podcastId: string): Observable<any> {
    const cacheKey = `podcast_${podcastId}`;
    if (this.cache[cacheKey]) {
      return of(this.cache[cacheKey]);
    } else {
      return this.http.get<any>(`${this.apiUrl}podcasts/${podcastId}`, {
        headers: {
          'X-ListenAPI-Key': this.apiKey
        }
      }).pipe(
        tap(response => {
          this.cache[cacheKey] = response;
        })
      );
    }
  }

}
