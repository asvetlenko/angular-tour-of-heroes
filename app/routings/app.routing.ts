import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent} from '../components/heroes/heroes.component';
import {DashboardComponent} from '../components/dashboard/dashboard.component';
import {HeroDetailComponent} from '../components/hero-detail/hero-detail.component';
import {TestDirectiveComponent} from '../components/test-directive/test-directive.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'test-directive',
        component: TestDirectiveComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);