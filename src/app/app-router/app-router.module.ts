import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MovieComponent } from '../movie/movie.component';
import { TvSeriesComponent } from '../tv-series/tv-series.component';

const appRoutes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'movies', component: MovieComponent},
  {path:'series', component: TvSeriesComponent} ,
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
