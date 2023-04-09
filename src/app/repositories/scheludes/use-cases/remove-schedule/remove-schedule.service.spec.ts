import { TestBed } from '@angular/core/testing';

import { RemoveScheduleService } from './remove-schedule.service';

describe('RemoveScheduleService', () => {
  let service: RemoveScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
