import { TestBed } from '@angular/core/testing';

import { FindDepartmentService } from './find-department.service';

describe('FindDepartmentService', () => {
  let service: FindDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
