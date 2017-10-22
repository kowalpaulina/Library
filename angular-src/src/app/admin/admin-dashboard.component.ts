import { Component } from '@angular/core';
import {AuthService} from "../login/auth.service";

@Component({
  template:  `
    <p>Dashboard</p>
    <button (click)="logout()">wyloguj</button>
  `
})
export class AdminDashboardComponent {


  constructor(private authService:AuthService) {
  }

  logout() {
      this.authService.isLoggedIn.next(false);
///        console.log('LoginComponent AuthService  - TEST', this.authService.test);
  }

}