import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router} from '@angular/router';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Array<Hero>;
  selectedHero: Hero;

  ngOnInit() {
    this.getHeroes();
  }

  constructor(private heroService: HeroService, private router: Router) {

  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

}
