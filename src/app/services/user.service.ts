import { Injectable, signal } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class UserService implements Resolve<User[]> {

  public userLists = signal<User[]>([]); //Declaring signals

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<User[]> {
    let data: any = localStorage.getItem('userList');
    return JSON.parse(data);
  }

  updateUser(userVal: any) {
    this.userLists.set(userVal); //Setting user values into signal
  }
}

export interface User {
  id: number;
  name: String;
  age: number;
  hobbies: String;
  gender: String;
}
