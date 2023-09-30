import { TestBed } from '@angular/core/testing';

import { CareerMemoryService } from './career-memory.service';

describe('CareerMemoryService', () => {
  let service: CareerMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CareerMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
