import { TestBed } from '@angular/core/testing';

import { AcademicChargeTeacherService } from './academic-charge-teacher.service';

describe('AcademicChargeTeacherService', () => {
  let service: AcademicChargeTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicChargeTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
