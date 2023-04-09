import { TestBed } from '@angular/core/testing';

import { FindSectionService } from './find-section.service';

describe('FindSectionService', () => {
  let service: FindSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
