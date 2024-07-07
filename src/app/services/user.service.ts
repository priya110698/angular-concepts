import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  public userLists = signal<User[]>([]); //Declaring signals

  constructor() { }

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
