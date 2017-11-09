import { Component } from '@angular/core';
import {AuthService} from "../../login/auth.service";

@Component({
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent {
  message: string;


  constructor(private authService:AuthService) {
  }

  logout() {
      this.authService.logout();
      this.authService.isLoggedIn.next(false);
      this.message = "Logging out ...";
  }

}