import { TestBed } from '@angular/core/testing';

import { ActivePeriodService } from './active-period.service';

describe('ActivePeriodService', () => {
  let service: ActivePeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivePeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
