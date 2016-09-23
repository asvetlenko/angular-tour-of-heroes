import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from './hero'

@Component({
    selector: 'tooltip-hero',
    templateUrl: 'app/tooltip-hero-component.html'
})
export class TooltipHeroComponent {
    @Input()
    hero: Hero;

    constructor(private router: Router) {

    }

    gotoDetail(): void {
        let link = ['/detail', this.hero.id];
        this.router.navigate(link);
    }
}
