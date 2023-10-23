import { TestBed } from '@angular/core/testing';

import { CloseInscriptionService } from './close-inscription.service';

describe('CloseInscriptionService', () => {
  let service: CloseInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloseInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
