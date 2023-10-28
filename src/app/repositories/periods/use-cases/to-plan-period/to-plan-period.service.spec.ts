import { TestBed } from '@angular/core/testing';

import { ToPlanPeriodService } from './to-plan-period.service';

describe('ToPlanPeriodService', () => {
  let service: ToPlanPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToPlanPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
