import {
  Component,
  OnInit,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import { Users } from "../../registration/user";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";
import { AuthService } from "../../login/auth.service";
import { StatusService } from "../../login/user-status.service";

@Component({
  templateUrl: "./manage-users.html",
  styleUrls: ["./manage-users.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ManageUsersComponent implements OnInit {
  users: Users[];
  appovedMessage: string;
  deleteForbidden = new EventEmitter<string>();
  message: string = "";
  isApproved: boolean;

  constructor(
    private authService: AuthService,
    private statusService: StatusService
  ) {}

  delete(user: Users) {
    if (user.booksBorrowed.length > 0) {
      console.log(user.booksBorrowed.length);
      this.message = "You can not delete user until he/she has borrowed books";
      this.deleteForbidden.emit(this.message);
      return;
    } else {
      this.message = "";
      this.authService.deleteUser(user).subscribe(users => {});
    }
  }

  changeApproval(user: Users) {
    if (user.approved) {
      user.approved = false;
    } else {
      user.approved = true;
    }
    this.authService.upadeApprovedStatus(user).subscribe(users => {});
  }

  changeFriend(user: Users) {
    if (user.friend) {
      user.friend = false;
    } else {
      user.friend = true;
    }
    this.authService.updateFriendStatus(user).subscribe(users => {});
  }

  ngOnInit() {
    this.authService.getUserStream().subscribe((users: Users[]) => {
      this.users = users;
    });

    this.statusService.checkStatusAfterRefreash();
    //check after signin
    this.statusService.getStatusStream().subscribe(value => {
      this.isApproved = value;
    });
  }
}
