import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from 'app/movies.service';
import { IMovies } from 'app/imovies';


//import { MovieComponent } from 'app/movie/movie.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MoviesService]
})
export class MovieDetailsComponent implements OnInit {


  private movie : IMovies;
  private similarMovies : IMovies[];
  private headline : string;
  private movieId;
  private searchUrlResult;

  public similar : IMovies;
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service : MoviesService) {}

  showMovie(id)
  {
    this.service.id = id;
    this.service.getMovieId().subscribe(response => {this.movie = response; console.log(response)});
  }

  showSimilarMovies(id)
  {
    this.service.id = id;
    this.service.getSimilarMovies().subscribe(response => {this.similarMovies = response; console.log(response)});
  }

  ngOnInit() 
  {
    this.headline = this.activatedRoute.snapshot.params['title'];
    this.movieId = this.activatedRoute.snapshot.params['id'];
    this.showMovie(this.movieId);
    this.showSimilarMovies(this.movieId);
    this.searchUrlResult = this.activatedRoute.snapshot;
  }

  public goBackToMovies()
  {
    this.router.navigate([this.searchUrlResult]);
  }

  //Når der klikkes på objektet bliver det kun selected den ene gang. SE:http://jilles.me/ng-click-and-ng-if-in-angular2/
  public onSelect = (movies : IMovies) =>
  {
    if (this.similar === movies) return;
    this.similar = movies;
    this.showMovie(movies.id);
    //console.log(movies)
  }

  public back()
  {
    this.showMovie(this.movieId);
  }

}
