import { TestBed } from '@angular/core/testing';

import { DeleteInscriptionService } from './delete-inscription.service';

describe('DeleteInscriptionService', () => {
  let service: DeleteInscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteInscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
