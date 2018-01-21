import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { AuthService } from "../login/auth.service";
import { StatusService } from "../login/user-status.service";
import { BorrowedService } from "../borrowed/borrowed.service";
import { Users } from "./../registration/user";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;
  message: string;
  isApproved: boolean;
  loggedUserId: string;
  user: Users;
  name: string;

  constructor(
    private authService: AuthService,
    private statusService: StatusService,
    private borrowedService: BorrowedService
  ) {
    this.authService.isLoggedIn.subscribe(value => {
      this.isLogged = value;
    });

    if (localStorage.getItem("token") !== null) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
      console.log("isloggedin false");
    }

    this.statusService.checkStatusAfterRefreash();
    this.statusService.getStatusStream().subscribe(value => {
      this.isApproved = value;
    });
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.authService.isLoggedIn.next(false);
  }
}
