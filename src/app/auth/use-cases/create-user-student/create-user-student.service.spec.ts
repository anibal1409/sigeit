import { TestBed } from '@angular/core/testing';

import { CreateUserStudentService } from './create-user-student.service';

describe('CreateUserStudentService', () => {
  let service: CreateUserStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUserStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
