import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Hero} from '../../common/models/hero'
import {HeroService} from '../../web-services/hero.service'

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private heroService: HeroService,
                private route: ActivatedRoute) {

    }

    getHeroes(id: number): void {
        this.heroService.getHero(id).then(hero => {
            this.hero = hero;
            return hero;
        });
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.getHeroes(id);
        })
    }

    goBack(): void {
        window.history.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(this.goBack)
    }
}
