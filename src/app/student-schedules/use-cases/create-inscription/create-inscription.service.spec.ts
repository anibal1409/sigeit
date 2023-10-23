import { TestBed } from '@angular/core/testing';

import { CreateInscriptionService } from './create-inscription.service';

describe('CreateInscriptionService', () => {
  let service: CreateInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
