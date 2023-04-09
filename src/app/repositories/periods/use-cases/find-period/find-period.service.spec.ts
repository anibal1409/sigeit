import { TestBed } from '@angular/core/testing';

import { FindPeriodService } from './find-period.service';

describe('FindPeriodService', () => {
  let service: FindPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
