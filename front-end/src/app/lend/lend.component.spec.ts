import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendComponent } from './lend.component';

describe('AboutComponent', () => {
  let component: LendComponent;
  let fixture: ComponentFixture<LendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
