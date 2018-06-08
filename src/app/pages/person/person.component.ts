import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Title, DomSanitizer } from '@angular/platform-browser';

import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonPageComponent implements OnInit {
  public person;
  public images;
  public casts;
  public section: String;
  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    if (typeof this.route.snapshot.params['section'] != 'undefined') {
      this.section = this.route.snapshot.params['section'];
    } else {
      this.section = 'home';
    }
    this.route.params.subscribe(params => {
      this.personService.getSection(+params['id'], 'images').subscribe(images => {
        this.images = images;
      })
      this.personService.getSection(+params['id'], '').subscribe(p => {
        this.person = p;
        this.titleService.setTitle(p.name);
      })
      this.personService.getSection(+params['id'], 'combined_credits').subscribe(credits => {
        var casts: any[] = credits.cast.sort((a, b) => {
          return new Date(b.release_date) - new Date(a.release_date);
        });
        this.casts = casts;
      })
    })
  }
  
  changeSection(section: string): void {
    this.section = section;
  }

}
