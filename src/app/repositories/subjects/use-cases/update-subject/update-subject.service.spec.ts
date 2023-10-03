import { TestBed } from '@angular/core/testing';

import { UpdateSubjectService } from './update-subject.service';

describe('UpdateSubjectService', () => {
  let service: UpdateSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
