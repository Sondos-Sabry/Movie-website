import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  API_URL = 'https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50';

  constructor(private _HttpClient: HttpClient) { }

  public getTrending(): Observable<any> {
    return this._HttpClient.get( 'https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50' );
    // <Movie[]>(`${this.API_URL}/task/`);
  }

}
 //https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50