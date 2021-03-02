import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroInterface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  // Inject HeroService into a private property
  constructor(private heroService: HeroService) { }

  // Run getHeroes() function after component mounts
  ngOnInit() {
    this.getHeroes();
  }

  // Get heroes from a remote server and store them in an array
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // Add a new hero
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
}