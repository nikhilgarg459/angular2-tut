import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()

export class HeroService {


    private heroesUrl = 'api/heroes';  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) {

    }

    // getHeroes(): Promise<Hero[]> {
    //     return new Promise((resolve, reject) => {
    //         resolve(HEROES);
    //     });
    // }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then((response: Response) => <Array<Hero>>response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    // getHeroesSlowly(): Promise<Hero[]> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => resolve(HEROES), 2000);
    //     });
    // }


    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then((response: Response) => <Hero>response.json().data)
            .catch(this.handleError);
    }

    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes().then(heroes => {
    //         return heroes.find(hero => hero.id === id);
    //     });
    // }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }



}