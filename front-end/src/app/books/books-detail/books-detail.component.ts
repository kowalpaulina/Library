import { AuthService } from "./../../login/auth.service";
import { Component, OnInit, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BooksService } from "../books.service";
import { Books } from "../books";
import { NgForm } from "@angular/forms";
import { Users } from "../../registration/user";
import { StatusService } from "../../login/user-status.service";

@Component({
  selector: "app-books-detail",
  templateUrl: "./books-detail.component.html",
  styleUrls: ["./books-detail.component.scss"]
})
export class BooksDetailComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private booksDataService: BooksService,
    private router: Router,
    private authService: AuthService,
    private statusService: StatusService
  ) {}

  books: Books;
  users: Users[];
  borrower;
  newUser: string;
  isApproved: boolean;
  message: string = "";
  deleteForbidden = new EventEmitter<string>();

  onChangeUser(newUser) {
    console.log("newUser1", newUser);
    //this.newUser = newUser;
    this.borrower = newUser;
    console.log("this.borrower2", this.borrower);
  }

  save(valid, books) {
    if (!valid) {
      return;
    }
    //this.books.borrower = this.borrower;
    if (this.books.borrower == "") {
      this.books.borrower = null;
    }
    console.log("this.books.borrower3", this.books.borrower);
    console.log("4", this.books);
    this.booksDataService.saveBook(this.books).subscribe(books => {
      this.router.navigate(["books", books._id]);
    });
  }

  delete(books) {
    console.log(books.borrower);
    if (books.borrower || books.borrower != null) {
      this.message = "You can not delete the book until it is borrowed";
      this.deleteForbidden.emit(this.message);
      return;
    } else {
      this.message = "";
      this.booksDataService.deleteBook(this.books).subscribe(books => {
        this.router.navigate(["books"]);
      });
    }
  }

  getId() {
    this.activeRoute.params.subscribe(params => {
      let id = params["id"];
      if (id) {
        this.message = "";
        this.deleteForbidden.emit(this.message);
        this.booksDataService.getBook(id).subscribe((books: Books) => {
          this.books = Object.assign({}, books);
          console.log(this.books);
        });
      } else {
        this.books = this.booksDataService.createBook();
      }
    });
  }

  ngOnInit() {
    this.getId();
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
