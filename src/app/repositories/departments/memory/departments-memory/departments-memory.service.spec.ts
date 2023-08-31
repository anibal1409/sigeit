import { TestBed } from '@angular/core/testing';

import { DepartmentsMemoryService } from './departments-memory.service';

describe('DepartmentsMemoryService', () => {
  let service: DepartmentsMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentsMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
