import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../login/auth.service";
import { StatusService } from '../login/user-status.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;
  message: string;
  isApproved: boolean;

  constructor(
     private authService: AuthService, private statusService: StatusService,
  ) {
      this.authService.isLoggedIn.subscribe(value => {
      this.isLogged = value;
      console.log("navbar",this.isLogged);
    });

    if (localStorage.getItem("token") !== null) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
      console.log("isloggedin false");
    }

    //check after signin
    this.statusService.getStatusStream().subscribe(value => {
      this.isApproved = value;
    });

    //check after refresh page
    if (localStorage.getItem("approved")) {
      if (localStorage.getItem("approved") == "true") {
        console.log();
        this.isApproved = true;
      } else {
        this.isApproved = false;
      }
    }
   }
  

  ngOnInit() {

  }

    logout() {
    this.authService.logout();
    this.authService.isLoggedIn.next(false);
  }



}
