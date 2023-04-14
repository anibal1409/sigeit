import { TestBed } from '@angular/core/testing';

import { GetSectionsSchedulesSemesterService } from './get-sections-schedules-semester.service';

describe('GetSectionsSchedulesSemesterService', () => {
  let service: GetSectionsSchedulesSemesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSectionsSchedulesSemesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
