import { TestBed } from '@angular/core/testing';

import { UpdateInscriptionService } from './update-inscription.service';

describe('UpdateInscriptionService', () => {
  let service: UpdateInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
