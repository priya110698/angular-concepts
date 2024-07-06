import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  public userList = signal<User[]>([]);

  constructor() { }

  updateUser(userVal: any) {
    this.userList.set(userVal);
  }
}

export interface User {
  id: number;
  name: String;
  age: number;
  hobbies: String;
  gender: String;
}
