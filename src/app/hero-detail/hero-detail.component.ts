import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../heroInterface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(  
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // String converted to number using the plus operator
    const id = +this.route.snapshot.paramMap.get('id');

    // getHero method of hero service called and response stored in an array
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
