import { TestBed } from '@angular/core/testing';

import { GetSchoolsService } from './get-schools.service';

describe('GetSchoolsService', () => {
  let service: GetSchoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSchoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
