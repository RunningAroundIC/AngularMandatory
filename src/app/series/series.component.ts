import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TvShowsService } from '../tv-shows.service';
import { ITvShows } from '../itv-shows';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [TvShowsService]
})
export class SeriesComponent implements OnInit {

  private series: ITvShows[];
  public selectedSerie: ITvShows;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private service : TvShowsService) 
  {
      this.service.getTvShows().subscribe(response => {this.series = response; console.log(response)});
  }

  ngOnInit() {}

   //Når der klikkes på objektet bliver det kun selected den ene gang. SE:http://jilles.me/ng-click-and-ng-if-in-angular2/
  public onSelect = (serie : ITvShows) =>
  {
    if (this.selectedSerie === serie) return;
    this.selectedSerie = serie;
    this.router.navigate(['series/series-details', serie.name, serie.id])
    //console.log(movie)
  }

}
