import {Component} from '@angular/core';

import {OnInit} from '@angular/core'
import {Router} from '@angular/router';

import {Hero} from '../../common/model/hero';
import {HeroService} from '../../web-services/hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls:['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) {

    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}