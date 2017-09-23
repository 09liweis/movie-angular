import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdGridListModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieComponent } from './pages/movie/movie.component';
import { SingleMovieComponent } from './components/movie/movie.component';

import { MovieService } from './services/movie.service';
import { SessionService } from './services/session.service';
import { NewsService } from './services/news.service';
import { TvService } from './services/tv.service';

import { LoginComponent } from './login/login.component';
import { PersonComponent } from './components/person/person.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NewsComponent } from './pages/news/news.component';
import { TvsComponent } from './pages/tvs/tvs.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    SingleMovieComponent,
    LoginComponent,
    PersonComponent,
    MovieListComponent,
    NewsComponent,
    TvsComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    MdGridListModule,
    MdCardModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: 'tvs/:type',
        component: TvsComponent
      },
      {
        path: 'movies',
        component: MoviesComponent
      },
      {
        path: 'movies/:type',
        component: MoviesComponent
      },
      {
        path: 'movie/:id',
        component: MovieComponent
      },
      {
        path: 'movie/:id/:section',
        component: MovieComponent
      }
    ]),
  ],
  providers: [
    Title,
    MovieService,
    NewsService,
    TvService,
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
