import { Injectable } from '@angular/core';
import { Hero } from './heroInterface';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // Mock is being returned using of() function of rxjs
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // Mock is being returned using of() function of rxjs
    return of(HEROES.find(hero => hero.id === id));
  }
}
