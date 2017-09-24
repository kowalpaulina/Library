import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BooksService } from "./books.service";
import { Books } from "./books";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-books-detail",
  template: `
        <div class="books-details" *ngIf="books">
          <form #formRef="ngForm" (ngSubmit)="save(formRef.valid, books)">
          <div class="form-group">
            <label>Nazwa:</label>
            <input type="text" #nameRef="ngModel" required minlength="2" [(ngModel)]="books.title" name="name" class="form-control">
            <div class="has-danger" *ngIf="nameRef.touched || nameRef.dirty || formRef.submitted">
              <div class="form-control-feedback" 
                    *ngIf="nameRef.errors?.required">
                    To pole jest wymagane
              </div>
              <div class="form-control-feedback" 
                    *ngIf="nameRef.errors?.minlength">
                    To pole musi mieć przynajmniej {{nameRef.errors.minlength.requiredLength}} znaki
              </div>
            </div>

            <label>Autor:</label>
            <input type="text" required minlength="3" [(ngModel)]="books.author" name="author" class="form-control">
            <div class="has-danger" *ngIf="nameRef.touched || nameRef.dirty || formRef.submitted">
              <div class="form-control-feedback" 
                    *ngIf="nameRef.errors?.required">
                    To pole jest wymagane
              </div>
              <div class="form-control-feedback" 
                    *ngIf="nameRef.errors?.minlength">
                    To pole musi mieć przynajmniej {{nameRef.errors.minlength.requiredLength}} znaki
              </div>
            </div>
          </div>
         
      
          
          <div class="form-group">
            <label><input type="checkbox" [(ngModel)]="books.read" name="read"> 
            Przeczytana</label>
          </div>
          <div class="form-group">
            <button class="btn btn-success float-xs-right" type="submit">Zapisz</button>
            <button *ngIf="books.id" class="btn btn-warning float-xs-right" type="button" (click)="delete(books); $event.stopPropagation()">Usuń</button>
          </div>
          </form>
        </div>
  `,
  styles: [
    `
    input.ng-dirty.ng-invalid, 
    textarea.ng-dirty.ng-invalid,
    input.ng-touched.ng-invalid, 
    textarea.ng-touched.ng-invalid{
      border: 1px solid red;
    }
  `
  ]
})
export class BooksDetailComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private booksDataService: BooksService,
    private router: Router
  ) {}

  books: Books;

  save(valid, books) {
    if (!valid) {
      return;
    }
    this.booksDataService.saveBook(this.books)
      .subscribe(books => {
      this.router.navigate(["books", books.id]);
    });
  }

  delete(books) {
    this.booksDataService.deleteBook(this.books).subscribe(books => {
      this.router.navigate(["books"]);
    });
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      let id = parseInt(params["id"]);
      console.log(id);
      if (id) {
        this.booksDataService.getBook(id).subscribe((books: Books) => {
          this.books = Object.assign({}, books);
          console.log(this.books);
        });
      } else {
        this.books = this.booksDataService.createBook();
      }
    });
  }
}
