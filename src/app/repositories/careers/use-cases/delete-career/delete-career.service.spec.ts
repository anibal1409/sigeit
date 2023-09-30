import { TestBed } from '@angular/core/testing';

import { DeleteCareerService } from './delete-career.service';

describe('DeleteCareerService', () => {
  let service: DeleteCareerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteCareerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
