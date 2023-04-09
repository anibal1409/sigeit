import { TestBed } from '@angular/core/testing';

import { GetSubjectsByDepartmentService } from './get-subjects.service';

describe('GetSubjectsService', () => {
  let service: GetSubjectsByDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSubjectsByDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
