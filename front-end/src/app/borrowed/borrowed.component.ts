import { BooksService } from "./../books/books.service";
import { BorrowedService } from "./borrowed.service";
import { Users } from "./../registration/user";
import { Books } from "../books/books";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Component({
  selector: "app-borrowed",
  templateUrl: "./borrowed.component.html",
  styleUrls: ["./borrowed.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class BorrowedComponent implements OnInit {
  loggedUserId: string;
  user: Users;
  message: string = "";
  book: Books;
  listOfBorrowedBooks: object[] = [];
  loggedUserToken

  constructor(
    private borrowedService: BorrowedService,
    private booksService: BooksService
  ) {
    if (localStorage.getItem("userId") !== null) {
      this.loggedUserId = localStorage.getItem("userId");
    }

      if (localStorage.getItem("token") !== null) {
      this.loggedUserToken = localStorage.getItem("token");
    }

    

    this.borrowedService.getUserData(this.loggedUserId).subscribe(user => {
      this.user = user;
      if (this.user.booksBorrowed.length > 0) {
        this.findBorrowedBooks(this.user.booksBorrowed);
      } else {
        this.message = "You have no borrowed books";
      }
    });
  }

  findBorrowedBooks(ids) {
    ids.forEach(id => {
      this.booksService.getBook(id).subscribe((book: Books) => {
        this.book = Object.assign({}, book);
        this.listOfBorrowedBooks.push(this.book);
      });
    });
  }

  ngOnInit() {}
}
