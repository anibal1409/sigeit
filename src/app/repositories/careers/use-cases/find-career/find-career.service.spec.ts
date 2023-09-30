import { TestBed } from '@angular/core/testing';

import { FindCareerService } from './find-career.service';

describe('FindCareerService', () => {
  let service: FindCareerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindCareerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
