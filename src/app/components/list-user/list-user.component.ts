import { CommonModule } from '@angular/common';
import { Component, effect } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  userList: any = [];
  constructor(public userService: UserService, public route: ActivatedRoute) {
    effect(() => {
      let data: any = localStorage.getItem('userList');
      this.userList = JSON.parse(data);
      if (this.userService.userLists().length > this.userList?.length) {
        this.userList = this.userService.userLists();
      }
    });
  }

  ngOnInit() {
      this.route.data.subscribe((users: any) => {
        console.log("users", users);
        this.userList = users.data;
      });
  }

  deleteUser(user: any) {
    this.userList = this.userList.filter((userObj: any) => userObj.id !== user.id);
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }
}
