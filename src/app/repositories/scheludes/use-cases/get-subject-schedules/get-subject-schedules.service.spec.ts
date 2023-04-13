import { TestBed } from '@angular/core/testing';

import { GetSubjectSchedulesService } from './get-subject-schedules.service';

describe('GetSubjectSchedulesService', () => {
  let service: GetSubjectSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSubjectSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
