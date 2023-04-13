import { TestBed } from '@angular/core/testing';

import { GetAllDaySchedulesService } from './get-all-day-schedules.service';

describe('GetAllDaySchedulesService', () => {
  let service: GetAllDaySchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllDaySchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
