import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UsersService } from '@tecnops/dashboard-sdk';
import { ToastModule, ToastService } from '@tecnops/toast';
import { UsersMemoryService } from '../../memory';

import { DeleteUserService } from './delete-user.service';

describe('DeleteUserService', () => {
  let service: DeleteUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DeleteUserService,
        UsersService,
        UsersMemoryService,
        ToastService,
        HttpClient,
        HttpHandler,
      ],
      imports: [ToastModule],
    });
    service = TestBed.inject(DeleteUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
