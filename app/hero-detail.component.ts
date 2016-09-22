import {Component, Input} from '@angular/core';

import {Hero} from './hero'

@Component({
    selector: 'my-hero-detail',
    template: `
       <div *ngIf="hero">    
           <h2>{{hero.firstName}} {{hero.lastName}} details!</h2>
           <div><label>id: </label>{{hero.id}}</div>
           <div>
                <label>First name: </label>
                <input [(ngModel)]="hero.firstName"   placeholder="First name">
           </div>
           <div>
                <label>Last name: </label>
                <input [(ngModel)]="hero.lastName"   placeholder="Last name">
           </div>
       </div>`
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
