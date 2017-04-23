import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../movies.service';
import { IMovies } from '../imovies';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {

private movies: IMovies[];
public selectedMovie: IMovies;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: MoviesService) 
  {
      this.service.getMovies().subscribe(response => {this.movies = response; console.log(response)});
  }

  ngOnInit() {}

  //Når der klikkes på objektet bliver det kun selected den ene gang. SE:http://jilles.me/ng-click-and-ng-if-in-angular2/
  public onSelect = (movie : IMovies) =>
  {
    if (this.selectedMovie === movie) return;
    this.selectedMovie = movie;
    this.router.navigate(['movies/movie-details', movie.title, movie.id])
    //console.log(movie)
  }
}
