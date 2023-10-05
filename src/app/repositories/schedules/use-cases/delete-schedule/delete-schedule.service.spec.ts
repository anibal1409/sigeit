import { TestBed } from '@angular/core/testing';

import { DeleteScheduleService } from './delete-schedule.service';

describe('DeleteScheduleService', () => {
  let service: DeleteScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
