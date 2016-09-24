import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../../hero';
import {HeroService} from '../../hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor(private router: Router,
                private heroService: HeroService) {

    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    /*
    gotoDetail(): void {
        let link = ['/detail', this.selectedHero.id];
        this.router.navigate(link);
    }
    */

    add(firstName: string, lastName: string): void {
        firstName = firstName.trim();
        lastName = lastName.trim();

        if (!firstName && !lastName) {
            return;
        }

        this.heroService.create(firstName, lastName)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            })
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() =>{
                this.heroes = this.heroes.filter(h => h !== hero);
                if(this.selectedHero == hero){
                    this.selectedHero = null;
                }
            });
    }
}
