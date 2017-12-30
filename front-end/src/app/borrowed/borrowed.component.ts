import { BooksService } from './../books/books.service';
import { BorrowedService } from './borrowed.service';
import { Users } from './../registration/user';
import { Books } from "../books/books";
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from "rxjs";


@Component({
  selector: 'app-borrowed',
  templateUrl: './borrowed.component.html',
  styleUrls: ['./borrowed.component.scss']
})
export class BorrowedComponent implements OnInit {

  loggedUserId: string;
  user: Users;
  message: string = "";
  book: Books;
  listOfBorrowedBooks: object[] = [];
  showTable: Subject<boolean> = new Subject<boolean>();

  constructor(private borrowedService:BorrowedService, private booksService: BooksService) { 

  if(localStorage.getItem("userId") !== null){
    this.loggedUserId = localStorage.getItem("userId");
    console.log(this.loggedUserId);
  }

  this.borrowedService.getUserData(this.loggedUserId)
  .subscribe(user => {
        console.log("getUser", user);
        this.user = user;
        console.log(this.user.booksBorrowed);
        if(this.user.booksBorrowed.length>0){
            this.findBorrowedBooks(this.user.booksBorrowed);
            this.showTable.next(true);
             console.log(this.showTable);
        }else{
          this.message = "You have no borrowed books";
          this.showTable.next(false);
           console.log(this.showTable);
        }
      });
  }

   findBorrowedBooks(ids){
     ids.forEach(id => {
       this.booksService.getBook(id).subscribe((book: Books) => {
          this.book = Object.assign({}, book);
          this.listOfBorrowedBooks.push(this.book)
        });
     });

    
      }

      

  ngOnInit() {
  }

}
