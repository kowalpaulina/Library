import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from "../login/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {
  isLogged: boolean;
  message: string;

  constructor(
     private authService: AuthService,
  ) {
      this.authService.isLoggedIn.subscribe(value => {
      this.isLogged = value;
      console.log(this.isLogged);
    });
   }
  

  ngOnInit() {

  }

    logout() {
    this.authService.logout();
    this.message = "Logging out ...";
    this.authService.isLoggedIn.next(false);
  }



}
