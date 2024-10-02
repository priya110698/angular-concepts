import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  access = 'Admin';

  constructor(public router: Router) { }

  loginUser(user: boolean) {
    if(user) {
      return this.access = 'Admin';
    }
    return this.access = '';
  }
}
