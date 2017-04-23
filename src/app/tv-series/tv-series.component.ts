import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TvShowsService } from '../tv-shows.service';
import { ITvShows } from '../itv-shows';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css'],
  providers: [TvShowsService]
})
export class TvSeriesComponent implements OnInit 
{

   private series: ITvShows[];
   public selectedSeries: ITvShows;

   constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: TvShowsService) { }

   search(term:string)
   {
     this.service.searchResult = term;
     this.service.searchTvShows().subscribe(response => {this.series = response; console.log(response)});
   }

  ngOnInit() {}

  //Når der klikkes på objektet bliver det kun selected den ene gang. SE:http://jilles.me/ng-click-and-ng-if-in-angular2/
  public onSelect = (serie : ITvShows) =>
  {
    if (this.selectedSeries === serie) return;
    this.selectedSeries = serie;
    this.router.navigate(['series/series-details', serie.name, serie.id])
    //console.log(movie)
  }

}
