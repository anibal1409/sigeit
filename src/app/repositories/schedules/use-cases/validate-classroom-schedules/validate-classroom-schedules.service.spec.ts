import { TestBed } from '@angular/core/testing';

import { ValidateClassroomSchedulesService } from './validate-classroom-schedules.service';

describe('ValidateClassroomSchedulesService', () => {
  let service: ValidateClassroomSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateClassroomSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
