import { TestBed } from '@angular/core/testing';

import { DeletePeriodService } from './delete-period.service';

describe('DeletePeriodService', () => {
  let service: DeletePeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletePeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
