import { TestBed } from '@angular/core/testing';

import { DocumentsFileService } from './documents.service';

describe('DocumentsService', () => {
  let service: DocumentsFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
