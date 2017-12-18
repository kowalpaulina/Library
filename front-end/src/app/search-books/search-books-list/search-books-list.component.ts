import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../books/books.service'
import { BooksSearchService } from '../books-search.service'
import { AuthService } from "../../login/auth.service";

@Component({
  selector: 'app-search-books-list',
  templateUrl: './search-books-list.component.html',
  styleUrls: ["./search-books-list.component.scss"],
})
export class SearchBooksListComponent implements OnInit {
    isLogged: boolean;


  constructor(private booksService:BooksService, private booksSearchService:BooksSearchService, private authService: AuthService) {
    this.authService.isLoggedIn.subscribe(value => {
      this.isLogged = value;
    });
   }

  chosenBook={};

  @Input()
  books;
  message: string = "Click chosen book to add it to your book collection";
 


  chosen(chosenBook){
    console.log("kliknięta ksiązka z szukanych",chosenBook);
    this.booksService.addBookToLibrary(chosenBook);
  }

  ngOnInit() {

  }

}
