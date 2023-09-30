import { TestBed } from '@angular/core/testing';

import { GetCareersService } from './get-careers.service';

describe('GetCareersService', () => {
  let service: GetCareersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCareersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
