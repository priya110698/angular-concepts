import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  userform: FormGroup;
  currentTime: any;


  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userform = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      hobbies: ['', Validators.required],
    });
  }

  submitUser() {
    let data: any = localStorage.getItem('userList'); //Getting Prev userList from Localstorage
    let users = JSON.parse(data) ? JSON.parse(data) : []; // UserList / First Time empty array declartion with empty array assigning
    // User Data from user-form
    let userCtrls = this.userform.controls;
    let user: User = {
      id: (new Date()).getMilliseconds() + Math.floor(Math.random() * 1000),
      name: userCtrls['name'].value,
      age: userCtrls['age'].value,
      gender: userCtrls['gender'].value,
      hobbies: userCtrls['hobbies'].value
    };
    // Add user in local-storage

    users.push(user); // user obj pushing into exsisting array
    this.userService.updateUser(users); // Used the same array for list users into ListUserComponent
    localStorage.setItem('userList', JSON.stringify(users)); //Set into the local-sorage, users-array in string-format 
    this.userform.reset(); //After added used clear the user form fields
    alert("User Added Successfully!!..");
  }

}
