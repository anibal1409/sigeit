import { TestBed } from '@angular/core/testing';

import { UpdateClassroomService } from './update-classroom.service';

describe('UpdateClassroomService', () => {
  let service: UpdateClassroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateClassroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
