import { TestBed } from '@angular/core/testing';

import { UpdateTeacherService } from './update-teacher.service';

describe('UpdateTeacherService', () => {
  let service: UpdateTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
