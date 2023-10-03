import { TestBed } from '@angular/core/testing';

import { CreateSubjectService } from './create-subject.service';

describe('CreateSubjectService', () => {
  let service: CreateSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
