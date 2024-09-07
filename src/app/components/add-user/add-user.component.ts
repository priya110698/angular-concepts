import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User, UserService } from '../../services/user.service';
import Swal from 'sweetalert2';


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
  isUserAdded = true;

  async canRouteToNext() {
    if (!this.isUserAdded) {
     // return confirm("User not added, Do you wish to continue"); //Design this && take video with this && designed one also
      //Designed one
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You have unsaved changes. Do you really want to leave?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, leave',
        cancelButtonText: 'No, stay',
        reverseButtons: true
      });
      return result.isConfirmed;
    }
    return true;
  }

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userform = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      hobbies: this.formBuilder.array([''])
    });

    this.userform.valueChanges.subscribe((valueChange) => {
      if (valueChange.name && valueChange.age && valueChange.gender) {
        this.isUserAdded = false;
      }
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

    console.log("user Values: ", user);


    users.push(user); // user obj pushing into exsisting array
    this.userService.updateUser(users); // Used the same array for list users into ListUserComponent
    localStorage.setItem('userList', JSON.stringify(users)); //Set into the local-sorage, users-array in string-format 
    this.userform.reset();
    this.userform.setControl('hobbies',
      this.formBuilder.array([''])); //After added used clear the user form fields
    alert("User Added Successfully!!..");
    this.isUserAdded = true;
  }

  //Getter function()
  get hobbiesVal(): FormArray {
    return this.userform.get('hobbies') as FormArray;
  }

  removeField(index: number): void {
    this.hobbiesVal.removeAt(index);
  }

  addHobbies() {
    this.hobbiesVal.push(this.formBuilder.control('')); // Controls adding
  }

}
