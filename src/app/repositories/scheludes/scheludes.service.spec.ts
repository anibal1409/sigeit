import { TestBed } from '@angular/core/testing';

import { SchedulesService } from './scheludes.service';

describe('ScheludesService', () => {
  let service: SchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
