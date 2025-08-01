import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamelCasePipe } from '../../pipes/camel-case.pipe';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, CamelCasePipe],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  userList: any = [];
  constructor(public route: ActivatedRoute, public router: Router) {}

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
