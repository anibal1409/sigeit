import { TestBed } from '@angular/core/testing';

import { FindInscriptionService } from './find-inscription.service';

describe('FindInscriptionService', () => {
  let service: FindInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
