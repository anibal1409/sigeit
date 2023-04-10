import { TestBed } from '@angular/core/testing';

import { GetClassroomScheduleService } from './get-classroom-schedule.service';

describe('GetClassroomScheduleService', () => {
  let service: GetClassroomScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetClassroomScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
