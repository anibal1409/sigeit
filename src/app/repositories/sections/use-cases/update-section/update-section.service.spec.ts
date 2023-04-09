import { TestBed } from '@angular/core/testing';

import { UpdateSectionService } from './update-section.service';

describe('UpdateSectionService', () => {
  let service: UpdateSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
