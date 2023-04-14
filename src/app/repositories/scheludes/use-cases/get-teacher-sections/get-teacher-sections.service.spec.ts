import { TestBed } from '@angular/core/testing';

import { GetTeacherSectionsService } from './get-teacher-sections.service';

describe('GetTeacherSectionsService', () => {
  let service: GetTeacherSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTeacherSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
