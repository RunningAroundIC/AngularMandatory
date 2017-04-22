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
  private movieId : string;
  private searchUrlResult;
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service : MoviesService) {}

  showMovie(id:string)
  {
    this.service.id = id;
    this.service.getMovieId().subscribe(response => {this.movie = response; console.log(response)});
  }

  showSimilarMovies(id:string)
  {
    this.service.id = id;
    this.service.getSimilarMovies().subscribe(response => {this.similarMovies = response; console.log(response)});
  }

  ngOnInit() 
  {
    this.headline = this.activatedRoute.snapshot.params['title'];
    this.movieId = this.activatedRoute.snapshot.params['id'];
    this.showMovie(this.movieId);
    //this.showSimilarMovies(this.movieId);
    this.searchUrlResult = this.router.urlHandlingStrategy;
  }

  public goBackToMovies()
  {
    this.router.navigate([this.searchUrlResult]);
  }

}
