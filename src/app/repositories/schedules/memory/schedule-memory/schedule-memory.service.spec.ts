import { TestBed } from '@angular/core/testing';

import { ScheduleMemoryService } from './schedule-memory.service';

describe('ScheduleMemoryService', () => {
  let service: ScheduleMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
