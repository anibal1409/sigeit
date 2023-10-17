import { TestBed } from '@angular/core/testing';

import { MemoryDocumentsService } from './memory-documents.service';

describe('MemoryDocumentsService', () => {
  let service: MemoryDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
