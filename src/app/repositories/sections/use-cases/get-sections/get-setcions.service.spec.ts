import { TestBed } from '@angular/core/testing';

import { GetSectionsService } from './get-setcions.service';

describe('GetSetcionsService', () => {
  let service: GetSectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
