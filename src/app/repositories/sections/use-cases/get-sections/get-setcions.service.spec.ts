import { TestBed } from '@angular/core/testing';

import { GetSetcionsService } from './get-setcions.service';

describe('GetSetcionsService', () => {
  let service: GetSetcionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSetcionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
