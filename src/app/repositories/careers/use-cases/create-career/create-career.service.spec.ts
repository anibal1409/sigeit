import { TestBed } from '@angular/core/testing';

import { CreateCareerService } from './create-career.service';

describe('CreateCareerService', () => {
  let service: CreateCareerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCareerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
