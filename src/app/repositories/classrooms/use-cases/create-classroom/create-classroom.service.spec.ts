import { TestBed } from '@angular/core/testing';

import { CreateClassroomService } from './create-classroom.service';

describe('CreateClassroomService', () => {
  let service: CreateClassroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateClassroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
