import { AuthService } from "./../../login/auth.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BooksService } from "../books.service";
import { Books } from "../books";
import { NgForm } from "@angular/forms";
import { Users } from "../../registration/user";

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
    private authService: AuthService
  ) {}

  books: Books;
  users: Users[];
  borrower;
  newUser:string;

  onChangeUser(newUser) {
    console.log(newUser);
    //this.newUser = newUser;
    this.borrower = newUser;
  }

  save(valid, books) {
    if (!valid) {
      return;
    }
    //this.books.borrower = this.borrower;
    console.log(typeof this.books.borrower);
    if(this.books.borrower ==""){
      this.books.borrower = null;
    }
    console.log(this.books.borrower);
    this.booksDataService.saveBook(this.books).subscribe(books => {
      this.router.navigate(["books", books._id]);
    });
  }

  delete(books) {
    this.booksDataService.deleteBook(this.books).subscribe(books => {
      this.router.navigate(["books"]);
    });
  }

  getId() {
    this.activeRoute.params.subscribe(params => {
      let id = params["id"];
      console.log(id);
      if (id) {
        this.booksDataService.getBook(id).subscribe((books: Books) => {
          this.books = Object.assign({}, books);
          console.log(this.books);
        });
      } else {
        this.books = this.booksDataService.createBook();
      }
    });
  }

  return(book){
    
  }

  ngOnInit() {
    this.getId();

        this.authService.getUserStream().subscribe((users: Users[]) => {
        this.users = users;});
        console.log("users from book.component", this.users);
    
  }
}
