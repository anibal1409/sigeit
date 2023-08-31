import { TestBed } from '@angular/core/testing';

import { SchoolMemoryService } from './school-memory.service';

describe('SchoolMemoryService', () => {
  let service: SchoolMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
