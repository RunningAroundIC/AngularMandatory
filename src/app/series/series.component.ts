import { Component, OnInit } from '@angular/core';
import { TvShowsService } from '../tv-shows.service';
import { ITvShows } from '../itv-shows';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
  providers: [TvShowsService]
})
export class SeriesComponent implements OnInit {

  series: ITvShows[];

  constructor(private service : TvShowsService) 
  {
      this.service.getTvShows().subscribe(response => {this.series = response; console.log(response)});
  }

  ngOnInit() {
  }

}
