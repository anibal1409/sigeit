import { TestBed } from '@angular/core/testing';

import { TeacherMemoryService } from './teacher-memory.service';

describe('TeacherMemoryService', () => {
  let service: TeacherMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
