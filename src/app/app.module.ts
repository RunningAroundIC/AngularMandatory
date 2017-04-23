import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

import { AppRouterModule } from './app-router/app-router.module';
import { TvSeriesComponent } from './tv-series/tv-series.component';
import { MovieDetailsComponent } from './movie/movie-details/movie-details.component';
import { SeriesDetailsComponent } from './tv-series/series-details/series-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    SeriesComponent,
    HomeComponent,
    MovieComponent,
    TvSeriesComponent,
    MovieDetailsComponent,
    SeriesDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
