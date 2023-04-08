import { TestBed } from '@angular/core/testing';

import { GetDepartamentsService } from './get-departaments.service';

describe('GetDepartamentsService', () => {
  let service: GetDepartamentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDepartamentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
