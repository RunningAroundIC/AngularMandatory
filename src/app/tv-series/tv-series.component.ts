import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TvShowsService } from '../tv-shows.service';
import { ITvShows } from '../itv-shows';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css'],
  providers: [TvShowsService]
})
export class TvSeriesComponent implements OnInit {

   private series: ITvShows[];

   constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: TvShowsService) { }

   search(term:string)
   {
     this.service.searchResult = term;
     this.service.searchTvShows().subscribe(response => {this.series = response; console.log(response)});
   }

  ngOnInit() {
  }

}
