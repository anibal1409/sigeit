import { TestBed } from '@angular/core/testing';

import { FindClassroomService } from './find-classroom.service';

describe('FindClassroomService', () => {
  let service: FindClassroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindClassroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
