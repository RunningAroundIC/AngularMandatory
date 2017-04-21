import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  private movies: IMovies[];
  private selectedMovie: IMovies;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: MoviesService) { }

 search(term:string)
 {
   this.service.searchResult = term;
   this.service.searchMovie().subscribe(response => {this.movies = response; console.log(response)});
 }

  ngOnInit() {}

  //Når der klikkes på objektet bliver det kun selected den ene gang. SE:http://jilles.me/ng-click-and-ng-if-in-angular2/
  public onSelect = (movie : IMovies) =>
  {
    if (this.selectedMovie === movie) return;
    this.selectedMovie = movie;
    console.log(movie)
  }

}
