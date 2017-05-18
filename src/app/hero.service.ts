import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()

export class HeroService {

    getHeroes(): Promise<Hero[]> {
        return new Promise((resolve, reject) => {
            resolve(HEROES);
        });
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(HEROES), 2000);
        });
    }

}