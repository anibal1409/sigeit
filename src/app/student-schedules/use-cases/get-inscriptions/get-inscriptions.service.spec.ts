import { TestBed } from '@angular/core/testing';

import { GetInscriptionsService } from './get-inscriptions.service';

describe('GetInscriptionsService', () => {
  let service: GetInscriptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInscriptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
