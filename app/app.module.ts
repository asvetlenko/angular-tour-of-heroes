import './common/rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './_fake-server/in-memory-data.service';

import {AppComponent} from './components/app/app.component'
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroSearchComponent} from './components/hero-search/hero-search.component';
import {TooltipHeroComponent} from './components/tooltip-hero/tooltip-hero-component';

import {HeroService} from './web-services/hero.service';

import {routing} from './routings/app.routing'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
        HeroSearchComponent,
        TooltipHeroComponent
    ],
    providers: [
        HeroService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
