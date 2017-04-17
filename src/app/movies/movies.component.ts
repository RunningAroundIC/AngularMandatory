import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { IMovies } from '../imovies';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {

movies: IMovies[];

  constructor(private service: MoviesService) 
  {
      this.service.getMovies().subscribe(response => {
        this.movies = response;
        console.log(response)
      });
  }

  ngOnInit() 
  {
    
  }
}
