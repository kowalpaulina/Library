import { Component, OnInit } from "@angular/core";
import { Books } from "../books";
import { BooksService } from "../books.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "./../../login/auth.service";
import { Users } from "../../registration/user";
import { StatusService } from '../../login/user-status.service';


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
    private statusService: StatusService,
  ) {}

  books;
  users: Users[];
  userWhoBorrow;
  AllUser;
  isApproved: boolean;

  edit(book) {
    if(!this.isApproved){
      return;
    }
    this.router.navigate(["books", book._id, "edit"]);
  }

  ngOnInit() {
    this.authService.getUserStream().subscribe((users: Users[]) => {
        this.users = users;
    });
      
    //check after signin
    this.statusService.getStatusStream().subscribe(value=>{
      this.isApproved = value;
    });

    //check after refresh page
        if(localStorage.getItem('approved')){
      if(localStorage.getItem('approved') == "true"){
        console.log()
        this.isApproved = true;
      }else{
        this.isApproved = false;
      }
    }

        console.log("bookslist component",this.isApproved);


    this.booksDataService.getBooksStream().subscribe((books: Books[]) => {

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
