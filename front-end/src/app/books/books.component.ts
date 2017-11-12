import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { BooksListComponent } from "./books-list/books-list.component";
import { BooksService } from "./books.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  providers: <any>[BooksService]
})
export class BooksComponent implements OnInit {
  constructor(private booksDataService:BooksService) {}

  ngOnInit() {}
}
