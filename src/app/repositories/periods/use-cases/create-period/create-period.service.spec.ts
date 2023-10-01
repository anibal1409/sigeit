import { TestBed } from '@angular/core/testing';

import { CreatePeriodService } from './create-period.service';

describe('CreatePeriodService', () => {
  let service: CreatePeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
