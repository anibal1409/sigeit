import { TestBed } from '@angular/core/testing';

import { GetSectionsSchedulesService } from './get-sections-schedules.service';

describe('GetSectionsSchedulesService', () => {
  let service: GetSectionsSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSectionsSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
