import { StatusService } from "../login/user-status.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BooksListComponent } from "./books-list/books-list.component";
import { BooksService } from "./books.service";
import { AuthService } from "./../login/auth.service";
import { Users } from "../registration/user";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  providers: <any>[BooksService]
})
export class BooksComponent implements OnInit {
  constructor(
    private booksDataService: BooksService,
    private authService: AuthService,
    private statusService: StatusService
  ) {}
  users: Users[];
  isApproved: boolean;

  ngOnInit() {
    this.statusService.checkStatusAfterRefreash();
    //check after signin
    this.statusService.getStatusStream().subscribe(value => {
      this.isApproved = value;
    });

    // //check after refresh page
    // if(localStorage.getItem('approved')){
    //   if(localStorage.getItem('approved') == "true"){
    //     this.isApproved = true;
    //   }else{
    //     this.isApproved = false;
    //   }
    // }

    console.log("books component", this.isApproved);
  }
}
