import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  userList: any = [];
  constructor() {
    let data: any = localStorage.getItem('userList');
    this.userList = JSON.parse(data);
  }

  deleteUser(user: any) {
    console.log("user", user);
    this.userList = this.userList.filter((userObj: any) => userObj.id !== user.id);
    console.log("this.userList --", this.userList);
    localStorage.setItem('userList', JSON.stringify(this.userList));

  }
}
