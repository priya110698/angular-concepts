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
    let data: any = localStorage.getItem('userList');
    let users = JSON.parse(data) ? JSON.parse(data) : [];
    let user: User = {
      id: (new Date()).getMilliseconds() + Math.floor(Math.random() * 1000),
      name: this.userform.controls['name'].value,
      age: this.userform.controls['age'].value,
      gender: this.userform.controls['gender'].value,
      hobbies: this.userform.controls['hobbies'].value
    };
    users.push(user);
    this.userService.updateUser(users);
    localStorage.setItem('userList', JSON.stringify(users));
    this.userform.reset();
    alert("Added Successfully!!..")
  }

}
