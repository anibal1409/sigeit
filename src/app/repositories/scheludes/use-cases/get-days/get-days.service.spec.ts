import { TestBed } from '@angular/core/testing';

import { GetDaysService } from './get-days.service';

describe('GetDaysService', () => {
  let service: GetDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
