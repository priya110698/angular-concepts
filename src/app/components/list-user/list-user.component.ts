import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  userList: any = [];
  constructor(public userService: UserService, public route: ActivatedRoute, public router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe((users: any) => {
      this.userList = users.data;
    });
  }

  deleteUser(user: any) {
    this.userList = this.userList.filter((userObj: any) => userObj.id !== user.id);
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }

  editUser(user: any) {
    this.router.navigate(['/edit-user'], { state: { user_id: user.id } });
  }
}
