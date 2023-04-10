import { TestBed } from '@angular/core/testing';

import { FindSubjectService } from './find-subject.service';

describe('FindSubjectService', () => {
  let service: FindSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
