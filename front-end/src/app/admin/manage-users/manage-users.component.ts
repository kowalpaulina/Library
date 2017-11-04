import { Component, OnInit } from "@angular/core";
import { Users } from "../../registration/user";
import { ManageUsersService } from "./manage-users.service";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";
import { AuthService } from "../../login/auth.service";

@Component({
  templateUrl: "./manage-users.html"
})
export class ManageUsersComponent implements OnInit {
  users: Users[];
  user;

  constructor(
    private manageUsersService: ManageUsersService,
    private authService: AuthService
  ) {}

  delete(user: Users) {
    this.authService.deleteUser(user).subscribe(users => {
      console.log(users);
    });
  }

  ngOnInit() {
    this.authService.getUserStream().subscribe((users: Users[]) => {
      this.users = users;
    });
  }
}
