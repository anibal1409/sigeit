import { TestBed } from '@angular/core/testing';

import { RemoveSectionService } from './remove-section.service';

describe('RemoveSectionService', () => {
  let service: RemoveSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
