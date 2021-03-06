import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie';
import { Movies } from '../../models/movies';
import { MovieService } from '../../services/movie.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  selectedLink: String;
  links: Array<String>;
  movies: Movies;
  selectedMovie: Movie;
  list: String = 'movie';
  type: string;
  currentPage: Number;
  totalPages: Array<Number>;
  
  constructor(
    private titleService: Title,
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    private utilsService: UtilsService
  ) {}
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.links = [
      'now_playing',
      'popular',
      'top_rated',
      'upcoming'
    ];

    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.movieService.getList(params['type'], params['page']))
    .subscribe((movies: Movies) => {
      const type = this.route.snapshot.params['type'];
      this.type = type;
      this.selectedLink = type;
      this.movies = movies;
      this.currentPage = movies.page;
      this.totalPages = Array(movies.total_pages).fill(1).map((x,i)=>i)
      // set Page title
      var title = this.utilsService.formatTitle(type);
      this.titleService.setTitle('Movies - ' + title);
    });
  }
  
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }
}
