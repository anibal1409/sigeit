import { TestBed } from '@angular/core/testing';

import { GetPeriodsService } from './get-periods.service';

describe('GetPeriodsService', () => {
  let service: GetPeriodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPeriodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
