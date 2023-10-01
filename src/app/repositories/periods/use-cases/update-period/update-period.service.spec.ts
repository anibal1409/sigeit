import { TestBed } from '@angular/core/testing';

import { UpdatePeriodService } from './update-period.service';

describe('UpdatePeriodService', () => {
  let service: UpdatePeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
