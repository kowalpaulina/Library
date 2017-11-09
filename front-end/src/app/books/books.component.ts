import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { BooksListComponent } from "./books-list.component";
import { BooksService } from "./books.service";

@Component({
  selector: "app-books",
  template: `
        <h2>Books collection</h2>
        <books-list></books-list>

        <div class="form-group">
          <button class="btn btn-primary float-xs-right" [routerLink]="['new']">Dodaj książkę</button>
        </div>
    `,
  providers: <any>[BooksService]
})
export class BooksComponent implements OnInit {
  constructor(private booksDataService:BooksService) {}

  ngOnInit() {}
}
