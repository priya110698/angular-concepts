import { Injectable, signal } from '@angular/core';
import { MaybeAsync, Resolve, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class UserService implements Resolve<User[]> {

  public userLists = signal<User[]>([]); //Declaring signals

  // 1. resolver - data processing - like data get pandradhhu.
  constructor(private router: Router) { }
  resolve(): MaybeAsync<any> {
    let data: any = localStorage.getItem('userList');
    data = JSON.parse(data);
    if (data && data.length > 0) {
      return data;
    } else {
      alert("No users found. Please add a user.");
      this.router.navigate(['/add-user']);
      return null;
    }
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
