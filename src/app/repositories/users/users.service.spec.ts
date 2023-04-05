import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  CreateUserService,
  GetUsersService,
  FindUserService,
  DeleteUserService,
  UpdateUsersService,
} from './use-cases';
import { UsersService as UserGeneratedService } from '@tecnops/dashboard-sdk';
import { UsersService } from './users.service';
import { UsersModule } from './users.module';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CreateUserService,
        GetUsersService,
        FindUserService,
        DeleteUserService,
        UpdateUsersService,
        HttpClient,
        HttpHandler,
        UserGeneratedService,
      ],
      imports: [UsersModule],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
