import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksListComponent } from './search-books-list.component';

describe('SearchBooksListComponent', () => {
  let component: SearchBooksListComponent;
  let fixture: ComponentFixture<SearchBooksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBooksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
