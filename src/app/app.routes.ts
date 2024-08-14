import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SPACE_TRADERS_API_KEY_COOKIE_NAME } from './constants';
import { inject } from '@angular/core';

const hasApiKeyCanActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {        
        const router = inject(Router);
        // check session storage first then local storage
        let sessionStorageKey = sessionStorage.getItem(SPACE_TRADERS_API_KEY_COOKIE_NAME);
        if(sessionStorageKey) {
            return true;
        }

        let localStorageKey = localStorage.getItem(SPACE_TRADERS_API_KEY_COOKIE_NAME);
        if(localStorageKey) {
            return true;
        }

        router.navigate(['login']);
        return false;
    };

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [hasApiKeyCanActivate] },
    { path: '**', component: HomeComponent, canActivate: [hasApiKeyCanActivate] }
];
