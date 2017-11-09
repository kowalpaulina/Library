import { Component, OnInit } from "@angular/core";
import { Users } from "../../registration/user";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";
import { AuthService } from "../../login/auth.service";

@Component({
  templateUrl: "./manage-users.html",
  styleUrls: ["./manage-users.component.scss"],
})
export class ManageUsersComponent implements OnInit {
  users: Users[];
  appovedMessage: string;
  

  constructor(
    private authService: AuthService
  ) {}

  delete(user: Users) {
    this.authService.deleteUser(user).subscribe(users => {
    });
  }


  changeApproval(user:Users){
    if(user.approved){
      user.approved = false;
    }else{
      user.approved = true;
    }

    this.authService.upadeApprovedStatus(user).subscribe(users => {

    })
  }



  ngOnInit() {
    this.authService.getUserStream().subscribe((users: Users[]) => {
      this.users = users;
    });
  }
}
