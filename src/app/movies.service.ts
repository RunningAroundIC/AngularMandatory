import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { IMovies } from './imovies';

import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService 
{

  private reqest: Observable<IMovies[]>;

  private baseUrl: string = "https://api.themoviedb.org/3/";
  private urlEnding: string = "?api_key=500895670e01e2d2df5b9d53e46ec86b&language=en-US";

  constructor(private http:Http) 
  { 
    
  }

  public getMovies():Observable<IMovies[]>
  {
    var url = this.getUrl("movie/popular");
    return this.http.get(url).map(response => response.json().results);
  }

  public searchMovie(): Observable<IMovies[]>
  {
    var url = this.getMovie("/search/movie");
    return this.http.get(url).map(responce => responce.json().results)
  }

  //Sammensætter url til getMovies.
  private getUrl(path : string) : string
  {
    return this.baseUrl+path+this.urlEnding;
  }
  //Sammensætter url til searchMovie.
  private getMovie(path : string) : string
  {
    return this.baseUrl+path+this.urlEnding;
  }

}
