import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { IMovies } from './imovies';

import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService 
{

  private reqest: Observable<IMovies[]>;
  private reqest2: Observable<IMovies>;

  private baseUrl: string = "https://api.themoviedb.org/3/";
  private urlEnding: string = "?api_key=500895670e01e2d2df5b9d53e46ec86b&language=en-US";
  private searchEnding: string = "&query=";
  private similar: string ="/similar";
  public searchResult;
  public id : string;

  //private fullUrl: string = "https://api.themoviedb.org/3/movie/315837?api_key=500895670e01e2d2df5b9d53e46ec86b&language=en-US" //ghost in a shell

  constructor(private http:Http) 
  { 
    
  }

  public getMovies(): Observable<IMovies[]>
  {
    var url = this.getUrl("movie/popular");
    return this.http.get(url).map(response => response.json().results);
  }

  public searchMovie(): Observable<IMovies[]>
  {
    var url = this.getMovie("search/movie");
    return this.http.get(url).map(response => response.json().results)
  }

  public getMovieId(): Observable<IMovies>
  {
    var url = this.getId("movie/")
    return this.http.get(url).map(response => response.json());
  }

  public getSimilarMovies(): Observable<IMovies[]>
  {
    var url = this.getIdSimilar("movie/")
    return this.http.get(url).map(response => response.json().results);
  }

  //Sammensætter url til getMovies.
  private getUrl(path : string) : string
  {
    return this.baseUrl+path+this.urlEnding;
  }
  //Sammensætter url til searchMovie.
  private getMovie(path : string) : string
  {
    return this.baseUrl+path+this.urlEnding+this.searchEnding+this.searchResult;
  }
  //Sammensætter url til getMovieId
  private getId(path : string) : string
  {
    return this.baseUrl+path+this.id+this.urlEnding;
  }

  //Sammensætter url til getSimilarMovies
  private getIdSimilar(path : string) : string
  {
    return this.baseUrl+path+this.id+this.similar+this.urlEnding;
  }

}
