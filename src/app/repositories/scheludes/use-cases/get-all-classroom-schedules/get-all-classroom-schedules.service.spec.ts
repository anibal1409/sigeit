import { TestBed } from '@angular/core/testing';

import { GetAllClassroomSchedulesService } from './get-all-classroom-schedules.service';

describe('GetAllClassroomSchedulesService', () => {
  let service: GetAllClassroomSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllClassroomSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
