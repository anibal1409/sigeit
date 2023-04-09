import { TestBed } from '@angular/core/testing';

import { FindScheduleService } from './find-schedule.service';

describe('FindScheduleService', () => {
  let service: FindScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
