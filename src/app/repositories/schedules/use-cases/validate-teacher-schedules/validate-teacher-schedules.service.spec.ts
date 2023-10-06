import { TestBed } from '@angular/core/testing';

import { ValidateTeacherSchedulesService } from './validate-teacher-schedules.service';

describe('ValidateTeacherSchedulesService', () => {
  let service: ValidateTeacherSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateTeacherSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
