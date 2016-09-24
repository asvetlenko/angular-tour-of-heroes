import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Hero} from '../../hero'

@Component({
    moduleId: module.id,
    selector: 'tooltip-hero',
    templateUrl: 'tooltip-hero-component.html'
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
