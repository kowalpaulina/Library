import { TestBed, inject } from '@angular/core/testing';

import { BooksSearchService } from './books-search.service';

describe('BooksSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BooksSearchService]
    });
  });

  it('should be created', inject([BooksSearchService], (service: BooksSearchService) => {
    expect(service).toBeTruthy();
  }));
});
