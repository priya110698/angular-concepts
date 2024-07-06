import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  userList: any = [];
  constructor(public userService: UserService) {
    effect(() => {
      let data: any = localStorage.getItem('userList');
      this.userList = JSON.parse(data);
      if (this.userService.userList().length > this.userList?.length) {
        this.userList = this.userService.userList();
      }
    });
  }

  deleteUser(user: any) {
    this.userList = this.userList.filter((userObj: any) => userObj.id !== user.id);
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }
}
