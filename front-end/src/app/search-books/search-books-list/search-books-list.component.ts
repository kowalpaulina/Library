import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BooksService } from '../../books/books.service'
import { BooksSearchService } from '../books-search.service'
import { AuthService } from "../../login/auth.service";
import { StatusService } from '../../login/user-status.service';

@Component({
  selector: 'app-search-books-list',
  templateUrl: './search-books-list.component.html',
  styleUrls: ["./search-books-list.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SearchBooksListComponent implements OnInit {
    isLogged: boolean;
    isApproved: boolean;
    chosenBook={};
    message: string = "Click chosen book to add it to your book collection";


  constructor(private booksService:BooksService, 
              private booksSearchService:BooksSearchService, 
              private statusService: StatusService, 
              private authService: AuthService) {
    this.authService.isLoggedIn.subscribe(value => {
      this.isLogged = value;
    });

    this.statusService.checkStatusAfterRefreash();
    this.statusService.getStatusStream().subscribe(value=>{
      this.isApproved = value;
      console.log("value",value);
    });

    

        //check after refresh page
    //     if(localStorage.getItem('approved')){
    //   if(localStorage.getItem('approved') == "true"){
    //     console.log()
    //     this.isApproved = true;
    //   }else{
    //     this.isApproved = false;
    //   }
    // }
   }

  @Input()
  books;
  
 


  chosen(chosenBook){
    if(!this.isApproved){
      return;
    }
    this.booksService.addBookToLibrary(chosenBook);
  }

  ngOnInit() {

  }

}
