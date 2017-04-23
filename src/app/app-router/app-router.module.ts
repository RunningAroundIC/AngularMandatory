import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MovieComponent } from '../movie/movie.component';
import { MovieDetailsComponent } from '../movie/movie-details/movie-details.component';
import { TvSeriesComponent } from '../tv-series/tv-series.component';
import { SeriesDetailsComponent } from '../tv-series/series-details/series-details.component';

const appRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'movies', component: MovieComponent},
  {path:'movies/movie-details/:title/:id', component: MovieDetailsComponent},
  {path:'series', component: TvSeriesComponent},
  {path:'series/series-details/:name/:id', component: SeriesDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRouterModule { }
