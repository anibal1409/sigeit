import { TestBed } from '@angular/core/testing';

import { PeriodMemoryService } from './period-memory.service';

describe('PeriodMemoryService', () => {
  let service: PeriodMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
