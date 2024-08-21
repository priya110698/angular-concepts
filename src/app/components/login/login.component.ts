import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userform!: FormGroup;

  constructor(public formBuilder: FormBuilder, public authservice: AuthService, public router: Router) {
    this.userform = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginForm() {
    this.router.navigate(['/add-user']);
    if (this.userform.controls['username'].value === 'Admin') {
      this.authservice.loginUser(true);
    } else {
      this.authservice.loginUser(false);
    }
  }
}
