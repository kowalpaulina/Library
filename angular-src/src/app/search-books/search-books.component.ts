import { Component, OnInit } from "@angular/core";
import { BooksSearchService } from "./books-search.service";
import { SearchBooksListComponent } from './search-books-list/search-books-list.component'

@Component({
  selector: "app-search-books",
  templateUrl: "./search-books.component.html",
  styleUrls: ["./search-books.component.scss"],
  providers: <any>[BooksSearchService]
})
export class SearchBooksComponent implements OnInit {
  constructor(private booksSearchService: BooksSearchService) {}

  books;

  ngOnInit() {
    this.books = this.booksSearchService.getBooksStream();
  }
}
