import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  userform: FormGroup;


  constructor(public formBuilder: FormBuilder) {
    this.userform = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      hobbies: ['', Validators.required],
    });
  }

  submitUser() {
    let id = (new Date()).getMilliseconds() + Math.floor(Math.random() * 1000);
    let data: any = localStorage.getItem('userList');
    let users = JSON.parse(data), addUser = [];

    let user = {
      id: id,
      name: this.userform.controls['name'].value,
      age: this.userform.controls['age'].value,
      gender: this.userform.controls['gender'].value,
      hobbies: this.userform.controls['hobbies'].value
    };
    users.push(user);
    localStorage.setItem('userList', JSON.stringify(users));
    this.userform.reset();
    alert("Added Successfully!!..")
  }

}
