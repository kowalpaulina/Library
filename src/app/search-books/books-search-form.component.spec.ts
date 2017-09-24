import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSearchFormComponent } from './books-search-form.component';

describe('BooksSearchFormComponent', () => {
  let component: BooksSearchFormComponent;
  let fixture: ComponentFixture<BooksSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
