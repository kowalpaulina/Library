import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import {BooksSearchService } from './books-search.service'

@Component({
  selector: 'app-books-search-form',
  styleUrls: ["./books-search-form.component.scss"],

  template: `
     <form class="search-books" [formGroup]="searchBooksForm">
      <div class="input-group">
        <input type="text" formControlName="query" class="form-control" placeholder="Title">
      </div>
    </form>
  `,
  styles: []
})
export class BooksSearchFormComponent implements OnInit {

    searchBooksForm:FormGroup

  constructor(private booksSearchService: BooksSearchService) { 
    this.searchBooksForm = new FormGroup({
      'query': new FormControl('Grisham')
    })

    this.searchBooksForm.get('query').valueChanges
    .filter(query => query.length >= 3 )
    .distinctUntilChanged()
    .debounceTime(400)
    .subscribe(query => {
        this.booksSearchService.search(query)
    })
  }

  search(query){
     this.booksSearchService.search(query)
  }

  ngOnInit() {
  }

}
