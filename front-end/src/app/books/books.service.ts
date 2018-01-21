import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Books } from "./books";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class BooksService {
  constructor(private http: Http, private errorService: ErrorService) {}

  server_url = "http://localhost:3000/books/";
  books: Books[] = [];
  chosenBook;
  booksStream$ = new Subject<Books[]>();

  saveBook(books) {
    const token = localStorage.getItem("token")
      ? "&token=" + localStorage.getItem("token")
      : "";
    const userId = localStorage.getItem("userId")
      ? "?userId=" + localStorage.getItem("userId")
      : "";
    let request;
    const headers = new Headers({ "Content-Type": "application/json" });
    if (books._id) {
      request = this.http.patch(
        `${this.server_url}${books._id}/edit${userId}${token}`,
        books,
        {
          headers: headers
        }
      );
    } else {
      const token = localStorage.getItem("token")
        ? "&token=" + localStorage.getItem("token")
        : "";
      const userId = localStorage.getItem("userId")
        ? "?userId=" + localStorage.getItem("userId")
        : "";
      request = this.http.post(
        `${this.server_url}new${userId}${token}`,
        books,
        {
          headers: headers
        }
      );
    }
    return request
      .map(response => response.json().obj)
      .do(newBooks => {
        this.books = Object.assign({}, newBooks);
        this.getBooks();
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  deleteBook(books) {
    let request;
    const token = localStorage.getItem("token")
      ? "&token=" + localStorage.getItem("token")
      : "";
    const userId = localStorage.getItem("userId")
      ? "?userId=" + localStorage.getItem("userId")
      : "";
    request = this.http.delete(
      `${this.server_url}${books._id}/edit${userId}${token}`
    );

    return request
      .map(response => response.json().obj)
      .do(books => {
        this.getBooks();
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
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
      dateTo: ""
    };
  }

  getBooks() {
    const token = localStorage.getItem("token")
      ? "&token=" + localStorage.getItem("token")
      : "";
    const userId = localStorage.getItem("userId")
      ? "?userId=" + localStorage.getItem("userId")
      : "";
    return this.http
      .get(`${this.server_url}${userId}${token}`)
      .map(response => response.json().obj)
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      })
      .subscribe(books => {
        this.books = books;
        this.booksStream$.next(this.books);
      });
  }

  getBooksStream() {
    if (!this.books.length) {
      this.getBooks();
    }
    return Observable.from(this.booksStream$).startWith(this.books);
  }

  getBook(id) {
    const token = localStorage.getItem("token")
      ? "&token=" + localStorage.getItem("token")
      : "";
    const userId = localStorage.getItem("userId")
      ? "?userId=" + localStorage.getItem("userId")
      : "";
    return this.http
      .get(`${this.server_url}${id}/edit${userId}${token}`)
      .map(response => response.json().obj)
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  addBookToLibrary(chosenBook) {
    this.saveBook(chosenBook).subscribe(() => {});
  }
}
