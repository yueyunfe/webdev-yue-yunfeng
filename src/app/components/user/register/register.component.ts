import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  user: any = {};
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  register(username: String, password: String, verifyPassword: String) {
    this.errorFlag = false;
    this.errorMsg = '';
    if (username == null || username.trim() == "") {
      this.errorMsg = 'Username cannot be empty';
      this.errorFlag = true;
      return;
    }
    if (password == null || password.trim() == "") {
      this.errorMsg = 'Password cannot be empty';
      this.errorFlag = true;
      return;
    }
    if (verifyPassword == null || password != verifyPassword) {
      this.errorMsg = 'Password and Verify Password do not match.';
      this.errorFlag = true;
      return;
    }
    if (!this.errorFlag) {
      this.user.username = username;
      this.user.password = password;
      this.userService.createUser(this.user).subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.router.navigate(['/user', user._id]);
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = error;
        }
      );
    }
  }
}
