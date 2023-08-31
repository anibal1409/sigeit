import { TestBed } from '@angular/core/testing';

import { DeleteSchoolService } from './delete-school.service';

describe('DeleteSchoolService', () => {
  let service: DeleteSchoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSchoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
