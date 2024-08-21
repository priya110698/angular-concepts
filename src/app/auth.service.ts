import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  access = 'all';

  constructor(public router: Router) { }

  loginUser(user: boolean) {
    if(user) {
      return this.access = 'all';
    }
    return this.access = '';
  }
}
