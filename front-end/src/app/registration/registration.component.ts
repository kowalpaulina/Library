import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RegistrationService } from "./registration.service";
import { Router } from "@angular/router";
import { Users } from "./user";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"]
})
export class RegistrationComponent implements OnInit {
  constructor(
    private registrationService: RegistrationService,
    private router: Router
  ) {}

  registerUser(user: Users) {
    console.log(user);
    this.registrationService.registerUser(user);

    this.router.navigate(["/admin/users-manage"]);
  }

  ngOnInit() {}
}
