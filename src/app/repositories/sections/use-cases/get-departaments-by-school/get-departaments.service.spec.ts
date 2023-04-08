import { TestBed } from '@angular/core/testing';

import { GetDepartamentsBySchoolService } from './get-departaments.service';

describe('GetDepartamentsService', () => {
  let service: GetDepartamentsBySchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepartamentsBySchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
