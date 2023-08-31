import { TestBed } from '@angular/core/testing';

import { FindSchoolService } from './find-school.service';

describe('FindSchoolService', () => {
  let service: FindSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
