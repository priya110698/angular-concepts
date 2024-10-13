import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User, UserService } from '../../services/user.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { UppercaseDirective } from '../../directives/upper-case.directive';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UppercaseDirective],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  userform: FormGroup;
  currentTime: any;
  isUserAdded = true;
  exsistingUserId: any;

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

  constructor(public formBuilder: FormBuilder, public userService: UserService, public route: ActivatedRoute, public router: Router) {
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

  ngOnInit() {
    let userId = 0;
    // this.route.paramMap.subscribe((users: any) => {
    //   userId = users.params.id;
    // });

    userId = history.state['user_id'];

    // const navigation = this.router.getCurrentNavigation()?.extras?.state;
    // userId = navigation?.['user_id'];
    
    

    this.userService.userList().subscribe((usersList: any) => {
      if (usersList) {
        let userObjVal = usersList.filter((userObj: any) => userObj.id === +userId);
        userObjVal = userObjVal[0];
        this.userform.setValue({
          id: userObjVal.id,
          name: userObjVal.name,
          age: userObjVal.age,
          gender: userObjVal.gender,
          hobbies: userObjVal.hobbies,
        });
        this.exsistingUserId = userObjVal.id;
      }
    });

  }

  submitUser(userObjVal?: any) {
    let data: any = localStorage.getItem('userList'); //Getting Prev userList from Localstorage
    let users = JSON.parse(data) ? JSON.parse(data) : []; // UserList / First Time empty array declartion with empty array assigning
    // User Data from user-form
    users = users.filter((userObj: any) => userObj.id != this.exsistingUserId);
    let userCtrls = this.userform.controls;
    let user: User;
    user = {
      id: (new Date()).getMilliseconds() + Math.floor(Math.random() * 1000),
      name: userCtrls['name'].value,
      age: userCtrls['age'].value,
      gender: userCtrls['gender'].value,
      hobbies: userCtrls['hobbies'].value
    };
    if (this.exsistingUserId) {
      user['id'] = this.exsistingUserId;
    }
    // Add user in local-storage

    console.log("user Values: ", user);
    users.push(user); // user obj pushing into exsisting array
    this.userService.updateUser(users); // Used the same array for list users into ListUserComponent
    localStorage.setItem('userList', JSON.stringify(users)); //Set into the local-sorage, users-array in string-format 
    this.userform.reset();
    this.userform.setControl('hobbies',
      this.formBuilder.array([''])); //After added used clear the user form fields
    if (this.exsistingUserId) {
      alert("User Updated Successfully!!..");
    } else {
      alert("User Added Successfully!!..");
    }
    this.isUserAdded = true;
    this.router.navigate(['/list-user']);
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
