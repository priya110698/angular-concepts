import { inject } from '@angular/core';
import { CanActivateFn, CanDeactivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const userGuardCanActivate: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = authService.access === 'all';
    if (!isAuthenticated) {
      if(router.url.includes('/list-user')) {
        alert("You have no access to add user");
        router.navigate(['login']);
        return isAuthenticated;
      }
      router.navigate(['/list-user']);
    }
    return isAuthenticated;
};

export const userDeactivateGuard: CanDeactivateFn<any>  = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isAuthenticated = authService.access === 'all';
    if (!isAuthenticated) {
      if(router.url.includes('/list-user')) {
        alert("You have no access to add user");
        router.navigate(['login']);
        return isAuthenticated;
      }
      router.navigate(['/list-user']);
    }
    return isAuthenticated;
};
