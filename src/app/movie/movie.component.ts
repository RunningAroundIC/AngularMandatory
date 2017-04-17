import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../movies.service';
import { IMovies } from '../imovies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MoviesService]
})
export class MovieComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: MoviesService) 
  {
    
  }

  ngOnInit() {
  }

}
