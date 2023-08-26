import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HttpFormDataClientService } from './http-form-data-client.service';

describe('HttpFormDataClientService', () => {
  let service: HttpFormDataClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpFormDataClientService],
    });
    service = TestBed.inject(HttpFormDataClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
