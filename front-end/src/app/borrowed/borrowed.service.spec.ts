import { TestBed, inject } from '@angular/core/testing';

import { BorrowedService } from './borrowed.service';

describe('BorrowedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BorrowedService]
    });
  });

  it('should be created', inject([BorrowedService], (service: BorrowedService) => {
    expect(service).toBeTruthy();
  }));
});
