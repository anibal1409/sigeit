import { TestBed } from '@angular/core/testing';

import { UpdateDepartmentService } from './update-department.service';

describe('UpdateDepartmentService', () => {
  let service: UpdateDepartmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDepartmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
