import { TestBed } from '@angular/core/testing';

import { DeleteClassroomService } from './delete-classroom.service';

describe('DeleteClassroomService', () => {
  let service: DeleteClassroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteClassroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
