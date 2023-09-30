import { TestBed } from '@angular/core/testing';

import { UpdateCareerService } from './update-career.service';

describe('UpdateCareerService', () => {
  let service: UpdateCareerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCareerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
