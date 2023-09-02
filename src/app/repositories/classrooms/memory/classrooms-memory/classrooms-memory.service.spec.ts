import { TestBed } from '@angular/core/testing';

import { ClassroomsMemoryService } from './classrooms-memory.service';

describe('ClassroomsMemoryService', () => {
  let service: ClassroomsMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomsMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
