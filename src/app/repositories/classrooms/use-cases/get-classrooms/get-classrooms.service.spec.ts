import { TestBed } from '@angular/core/testing';

import { GetClassroomsService } from './get-classrooms.service';

describe('GetClassroomsService', () => {
  let service: GetClassroomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetClassroomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
