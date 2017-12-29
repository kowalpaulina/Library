import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Books } from "./books";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";




@Injectable()
export class BooksService{
  constructor(private http: Http, private errorService: ErrorService) {}


  server_url = "http://localhost:3000/books/";
  books: Books[] = [];
  chosenBook;
  booksStream$ = new Subject<Books[]>();
  token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
  userId = localStorage.getItem('userId') ? '?userId=' + localStorage.getItem('userId') : '';


  saveBook(books) {
    let request;
    const headers = new Headers({ "Content-Type": "application/json" });
    if (books._id) {
      console.log("saveBooks from service", books);
      request = this.http.patch(`${this.server_url}${books._id}/edit${this.userId}`, books, {
        headers: headers
      });
    } else {
      request = this.http.post(`${this.server_url}new`, books, {
        headers: headers
      });
    }
    return request
      .map(response => response.json().obj)
      .do(books => {
        this.getBooks();
      })
      .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
      })
  }

  deleteBook(books) {
    let request;
    request = this.http.delete(`${this.server_url}${books._id}/edit`);

    return request
      .map(response => response.json().obj)
      .do(books => {
        this.getBooks();
    })
      .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
      })
  }

  createBook(): Books {
    return {
      id: null,
      author: "",
      title: "",
      read: false,
      lend: false,
      borrower: null,
      dateFrom: "",
      dateTo: "",
    };
  }

  getBooks() {
    return this.http
      .get(this.server_url)
      .map(response => response.json().obj)
      .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
      })
      .subscribe(books => {
        console.log("getBooks", books);
        

        this.books = books;
        console.log("this.getBooks", this.books);
        this.booksStream$.next(this.books);
      });
  }

  getBooksStream() {
    if (!this.books.length) {
      this.getBooks();
    }
    //return this.booksStream$.startWith(this.books);
    console.log("getBooksStream", this.books);
    return Observable.from(this.booksStream$).startWith(this.books);
  }

  getBook(id) {
    console.log(this.userId);
    console.log(this.token);
    return this.http
      .get(`${this.server_url}${id}/edit${this.userId}`)
      .map(response => response.json().obj)
      .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
      })
  }

  addBookToLibrary(chosenBook) {
    this.saveBook(chosenBook).subscribe(() => {
    });
  }
}
