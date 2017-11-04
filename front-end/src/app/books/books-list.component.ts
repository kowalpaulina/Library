import { Component, OnInit } from "@angular/core";
import { Books } from "./books";
import { BooksService } from "./books.service";
import { ActivatedRoute, Router } from "@angular/router";

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
    private router: Router
  ) {}

  books;

  edit(book) {
    this.router.navigate(["books", book._id, "edit"]);
  }

  ngOnInit() {
    this.booksDataService.getBooksStream().subscribe((books: Books[]) => {
      this.books = books;
    });
  }
}
