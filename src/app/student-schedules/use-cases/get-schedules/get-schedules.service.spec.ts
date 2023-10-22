import { TestBed } from '@angular/core/testing';

import { GetSchedulesService } from './get-schedules.service';

describe('GetSchedulesService', () => {
  let service: GetSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
