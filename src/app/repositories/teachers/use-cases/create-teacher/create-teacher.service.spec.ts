import { TestBed } from '@angular/core/testing';

import { CreateTeacherService } from './create-teacher.service';

describe('CreateTeacherService', () => {
  let service: CreateTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
