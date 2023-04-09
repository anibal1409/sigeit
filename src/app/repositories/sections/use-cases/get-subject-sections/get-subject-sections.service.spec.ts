import { TestBed } from '@angular/core/testing';

import { GetSubjectSectionsService } from './get-subject-sections.service';

describe('GetSubjectSectionsService', () => {
  let service: GetSubjectSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSubjectSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
