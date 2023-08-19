import { TestBed } from '@angular/core/testing';

import { DeleteTeacherService } from './delete-teacher.service';

describe('DeleteTeacherService', () => {
  let service: DeleteTeacherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteTeacherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
