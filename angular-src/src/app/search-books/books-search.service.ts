import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class BooksSearchService {
  books = [];
  chosenBook = {};
  

  booksStream = new Subject();

  constructor(private http: Http) {
    this.search("Grisham");
  }

  getBooksStream() {
    //console.log("getstream",this.books)
    return Observable
          .from(this.booksStream)
          .startWith(this.books)
  }

  search(query) {
    console.log("query",query)
    let url =
      `http://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=e13a1f4cefca4afba7016dcc43e832ca&author=${query}&sort-by=title&sort-order=desc`;

    return this.http
      .get(url)
      .map(response => response.json())
      .subscribe(books => {
        console.log("stream1", books); //obiekt
        books = Object.keys( books ).map( p => Object.assign( books[p], {field:p} ) )
        
        this.books = books[3]; //tablica
        this.booksStream.next(this.books);
      });
  }


}

// The Object.keys() method returns an array of a given object's own enumerable properties, 
// in the same order as that provided by a for...in loop (the difference being that a for-in
// loop enumerates properties in the prototype chain as well).


