import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // properties
  user = {};
  userId: String;
  errorFlag: boolean;
  errorMessage: String;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.uid;
      return this.userService.findUserById(this.userId).subscribe(
        (user: any) => {
          this.user = user;
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMessage = error.toString();
        }
      );
    });
  }

  updateUser(updatedUser) {
    this.userService.updateUser(this.userId, updatedUser).subscribe(
      (user: any) => {
        this.errorFlag = false;
        this.user = user;
        this.ngOnInit();
      },
      (error: any) => {
        this.errorFlag = true;
        this.errorMessage = error;
      }
    );
  }

  deleteUser() {
    this.userService.deleteUser(this.userId).subscribe(
      (user: any) => {
        let url: any = '/login';
        this.router.navigate([url]);
      },
      (error: any) => {
        this.errorFlag = true;
        this.errorMessage = error;
      }
    )
  }
}
