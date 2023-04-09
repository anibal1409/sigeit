import { TestBed } from '@angular/core/testing';

import { FindSettingService } from './find-setting.service';

describe('FindSettingService', () => {
  let service: FindSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
