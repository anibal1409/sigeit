import { TestBed } from '@angular/core/testing';

import { SectionMemoryService } from './section-memory.service';

describe('SectionMemoryService', () => {
  let service: SectionMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
