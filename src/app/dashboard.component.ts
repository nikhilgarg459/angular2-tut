import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{ 
    heroes: Array<Hero> = [];
    
    ngOnInit(){
        this.heroService.getHeroes().then(heroes=>{this.heroes = heroes.slice(1,5);});
    }

    constructor(private heroService: HeroService){

    }
}