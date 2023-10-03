import { TestBed } from '@angular/core/testing';

import { DeleteSubjectService } from './delete-subject.service';

describe('DeleteSubjectService', () => {
  let service: DeleteSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
