import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, ɵEmptyOutletComponent } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule, UserDetailsComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {
  userList: any = [];
  userDetails = false;
  userDetailsData: any;
  constructor(public route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.route.data.subscribe((users: any) => {
      this.userList = users.data;
    });
    console.log("this.userList", this.userList);
    
  }

  deleteUser(user: any) {
    this.userList = this.userList.filter((userObj: any) => userObj.id !== user.id);
    localStorage.setItem('userList', JSON.stringify(this.userList));
  }

  editUser(user: any) {
    this.router.navigate(['/edit-user'], { state: { user_id: user.id } });
  }

  more(user: any) {
    this.userDetails = true;
    this.userDetailsData = user;
  }
}
