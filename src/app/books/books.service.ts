import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Books } from "./books";
import "rxjs/add/operator/map";
import "rxjs/Rx";
import { Subject, Observable } from "rxjs";

@Injectable()
export class BooksService {
  constructor(private http: Http) {}

  server_url = "http://localhost:4000/books/";

  books: Books[] = [];
  chosenBook;

  booksStream$ = new Subject<Books[]>();

  saveBook(books) {
    console.log("save", books);
    let request;
    if (books.id) {
      request = this.http.put(this.server_url + books.id, books);
    } else {
      request = this.http.post(this.server_url, books);
    }
    return request
      .map(response => response.json())
      .do(books => {
      this.getBooks();
    });
  }

  deleteBook(books) {
    console.log("usun", books);
    let request;
    request = this.http.delete(this.server_url + books.id);

    return request.map(response => response.json())
    .do(books => {
      this.getBooks();
    });
  }

  createBook(): Books {
    return {
      id: 0,
      author: "",
      title: "",
      read: false
    };
  }

  getBooks() {
    return this.http
      .get(this.server_url)
      .map(response => response.json())
      .subscribe(books => {
        console.log("getBooks", books);
        this.books = books;
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
    return this.http.get(this.server_url + id).map(response => response.json());
  }

  addBookToLibrary(chosenBook){
    console.log("Books from search",chosenBook)
    this.saveBook(chosenBook)
    .subscribe(()=>{
      //musi być subscribe żeby działało
    })
    
    
  }
}
