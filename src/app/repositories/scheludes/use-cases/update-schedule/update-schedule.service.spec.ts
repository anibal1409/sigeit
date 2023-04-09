import { TestBed } from '@angular/core/testing';

import { UpdateScheduleService } from './update-schedule.service';

describe('UpdateScheduleService', () => {
  let service: UpdateScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
