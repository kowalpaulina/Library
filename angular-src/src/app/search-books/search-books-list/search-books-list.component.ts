import { Component, OnInit, Input } from '@angular/core';
import { BooksService } from '../../books/books.service'
import { BooksSearchService } from '../books-search.service'

@Component({
  selector: 'app-search-books-list',
  templateUrl: './search-books-list.component.html',
  styles: [],
})
export class SearchBooksListComponent implements OnInit {


  constructor(private booksService:BooksService, private booksSearchService:BooksSearchService) { }

  chosenBook={};

  @Input()
  books;
 

  chosen(chosenBook){
    console.log("kliknięta ksiązka z szukanych",chosenBook);
    this.booksService.addBookToLibrary(chosenBook);
  }

  
  ngOnInit() {
  }

}
