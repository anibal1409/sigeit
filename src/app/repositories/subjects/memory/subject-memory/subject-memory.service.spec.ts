import { TestBed } from '@angular/core/testing';

import { SubjectMemoryService } from './subject-memory.service';

describe('SubjectMemoryService', () => {
  let service: SubjectMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
