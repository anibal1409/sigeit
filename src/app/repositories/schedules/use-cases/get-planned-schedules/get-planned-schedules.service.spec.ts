import { TestBed } from '@angular/core/testing';

import { GetPlannedSchedulesService } from './get-planned-schedules.service';

describe('GetPlannedSchedulesService', () => {
  let service: GetPlannedSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPlannedSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
