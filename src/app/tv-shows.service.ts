import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ITvShows } from './itv-shows';

import 'rxjs/add/operator/map';

@Injectable()
export class TvShowsService 
{

  private request: Observable<ITvShows[]>

  private baseUrl: string = "https://api.themoviedb.org/3/";
  private urlEnding: string = "?api_key=500895670e01e2d2df5b9d53e46ec86b&language=en-US";

  constructor(private http:Http) 
  {

  }

  public getTvShows():Observable<ITvShows[]>
  {
    var url = this.getUrl("tv/popular");
    return this.http.get(url).map(responce => responce.json().results);
  }

  private getUrl(path : string) : string
  {
    return this.baseUrl+path+this.urlEnding;
  }

}
