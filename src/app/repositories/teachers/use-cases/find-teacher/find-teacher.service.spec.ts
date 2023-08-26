import { TestBed } from '@angular/core/testing';

import { FindTeacherService } from './find-teacher.service';

describe('FindTeacherService', () => {
  let service: FindTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
