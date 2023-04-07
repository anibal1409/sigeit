import { TestBed } from '@angular/core/testing';

import { ScheludesService } from './scheludes.service';

describe('ScheludesService', () => {
  let service: ScheludesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheludesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
