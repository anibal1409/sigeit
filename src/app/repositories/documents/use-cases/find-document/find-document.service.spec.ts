import { TestBed } from '@angular/core/testing';

import { FindDocumentService } from './find-document.service';

describe('FindDocumentService', () => {
  let service: FindDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
