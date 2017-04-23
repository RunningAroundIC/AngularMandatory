import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TvShowsService } from 'app/tv-shows.service';
import { ITvShows } from 'app/itv-shows';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css'],
  providers: [TvShowsService]
})
export class SeriesDetailsComponent implements OnInit {

  private serie : ITvShows;
  private similarSeries : ITvShows[];
  private headline : string;
  private serieId;
  private searchUrlResult;

  public similar : ITvShows;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service : TvShowsService) { }

  showTvSeries(id)
  {
    this.service.id = id;
    this.service.getSeriesId().subscribe(response => {this.serie = response; console.log(response)});
  }

  showSimilarSeries(id)
  {
    this.service.id = id;
    this.service.getSimilarSeries().subscribe(response => {this.similarSeries = response; console.log(response)});
  }

  ngOnInit() 
  {
    this.headline = this.activatedRoute.snapshot.params['name'];
    this.serieId = this.activatedRoute.snapshot.params['id'];
    this.showTvSeries(this.serieId);
    this.showSimilarSeries(this.serieId);
    this.searchUrlResult = this.activatedRoute.snapshot;
  }

  public goBackToSeries()
  {
    this.router.navigate([this.searchUrlResult]);
  }

  public onSelect = (series : ITvShows) =>
  {
    if (this.similar === series) return;
    this.similar = series;
    this.showTvSeries(series.id);
  }

  public back()
  {
    this.showTvSeries(this.serieId);
  }

}
