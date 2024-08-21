import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = this.authService.access === 'all';
    if (!isAuthenticated) {
      if(this.router.url.includes('/list-user')) {
        this.router.navigate(['login']);
        return isAuthenticated;
      }
      this.router.navigate(['/list-user']);
    }
    return isAuthenticated;
  }
}

