import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Movie } from '../../models/movie';
import { Movies } from '../../models/movies';
import { TvService } from '../../services/tv.service';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {
  
  tvs: Movies;
  selectedLink: String;
  links: Array<String>;
  currentPage: Number;
  totalPages: Array<Number>;
  list: String = 'tv';
  type: string;
  
  constructor(
    private titleService: Title,
    private tvService: TvService,
    private route: ActivatedRoute,
    private router: Router,
    private utilsService: UtilsService
  ) {}
  
  ngOnInit() {
    window.scrollTo(0, 0);
    this.links = [
      'airing_today',
      'on_the_air',
      'popular',
      'top_rated'
    ];
    this.selectedLink = 'airing_today';

    this.route.params
    // (+) converts string 'id' to a number
    .switchMap((params: Params) => this.tvService.getList(params['type'], params['page']))
    .subscribe((tvs: Movies) => {
      const type = this.route.snapshot.params['type'];
      this.type = type;
      this.selectedLink = type;
      this.tvs = tvs;
      this.currentPage = tvs.page;
      this.totalPages = Array(tvs.total_pages).fill(1).map((x,i)=>i)
      // set Page title
      var title = this.utilsService.formatTitle(type);
      this.titleService.setTitle('TVs - ' + title);
    });
  }
}
