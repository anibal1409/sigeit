import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { UsersService } from '@tecnops/dashboard-sdk';
import { ToastModule, ToastService } from '@tecnops/toast';
import { UsersMemoryService } from '../../memory';

import { UpdateUsersService } from './update-user.service';

describe('UpdateUsersService', () => {
  let service: UpdateUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UpdateUsersService,
        UsersService,
        UsersMemoryService,
        ToastService,
        HttpClient,
        HttpHandler,
      ],
      imports: [ToastModule],
    });
    service = TestBed.inject(UpdateUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
