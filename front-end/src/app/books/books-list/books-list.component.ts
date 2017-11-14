import { Component, OnInit } from "@angular/core";
import { Books } from "../books";
import { BooksService } from "../books.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "./../../login/auth.service";
import { Users } from "../../registration/user";

@Component({
  selector: "books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"],
  providers: <any>[BooksService]
})
export class BooksListComponent implements OnInit {
  constructor(
    private booksDataService: BooksService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {}

  books;
  users: Users[];
  userWhoBorrow;
  AllUser;

  edit(book) {
    this.router.navigate(["books", book._id, "edit"]);
  }

  ngOnInit() {

    this.authService.getUserStream().subscribe((users: Users[]) => {
        this.users = users;
    });


    this.booksDataService.getBooksStream().subscribe((books: Books[]) => {
      console.log("this.books from list",books);

      books.forEach(book => {
        this.userWhoBorrow = this.users.find(user => user._id == book.borrower);
        if(this.userWhoBorrow){
          book.borrower = this.userWhoBorrow.email;
        }else{
          book.borrower = "";
        }
        
      });
      
      this.books = books;
      
    });
  }
}
