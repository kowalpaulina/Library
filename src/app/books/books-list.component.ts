import {Component, OnInit} from '@angular/core';
import {Books} from './books';
import {BooksService} from './books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'books-list',
   template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <th> # </th>
          <th> Nazwa </th>
          <th> Autor </th>
          <th> Przeczytana </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let book of books; let i = index" class="playlist-row" (click)="edit(book)">
          <td> {{ i + 1 }}. </td>
          <td> {{ book.title }} </td>
          <td> {{ book.author }} </td>
          <td>
              <button *ngIf="book.read==true" class="btn btn-primary">Tak</button>
              <button *ngIf="!book.read" class="btn btn-danger">Nie</button>
          </td>
        </tr>
        
      </tbody>
      
    </table>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .table {
        width: 60%;
        max-width: 60%;
    }
    td{
        cursor:pointer;
    }

    th{
      color: #fff;
    }

    tr{
      background-color: rgba(2, 117, 216,0.5);
    }
    tr:first-child{
      background-color: rgba(2, 117, 216,0.9);
    }
    table{
      border: 1px solid transparent;
    }
    .button-blue{
      background-color: blue;
    }
  `],
    providers: <any>[BooksService]
})

export class BooksListComponent implements OnInit {
    constructor(private booksDataService:BooksService,private activeRoute: ActivatedRoute,private router:Router) {}

    books;

    edit(book) {
      console.log("kliknięta ksiązka",book);
    this.router.navigate(['books',book.id,'edit'])
  }

    ngOnInit() {
    this.booksDataService.getBooksStream()
    .subscribe((books:Books[]) => {
      this.books = books;
    })


    // this.activeRoute.params.subscribe(params => {
    //   let id = parseInt(params['id']);
    //   console.log(id);
    //   if (id) {
    //     this.booksDataService.getBook(id)
    //         .subscribe( (books:Books) => {
    //           this.books = books
    //           console.log("bookf from params with getBookId function",this.books)
    //         })
    //   }
    // })


  }
    
}