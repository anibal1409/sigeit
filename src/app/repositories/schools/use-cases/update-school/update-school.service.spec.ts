import { TestBed } from '@angular/core/testing';

import { UpdateSchoolService } from './update-school.service';

describe('UpdateSchoolService', () => {
  let service: UpdateSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
