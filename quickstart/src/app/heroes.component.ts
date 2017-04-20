import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService} from './hero.service';
// import { Router } from './app-routing.module';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ],
  providers: [ HeroService ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  getHeros(): void {
    this.heroService.getHeroes().then(heros => this.heroes = heros);
    // this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  getDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  ngOnInit(): void {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
