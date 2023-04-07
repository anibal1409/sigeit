import { Injectable } from '@angular/core';
import { ListComponentService } from '../common';
import { UsersMemoryService } from './memory';
import { UserVM } from './model';
import {
  GetUsersService,
  DeleteUserService,
  CreateUserService,
  UpdateUsersService,
  FindUserService,
} from './use-cases';

@Injectable()
export class UsersService extends ListComponentService<UserVM> {
  constructor(
    getService: GetUsersService,
    memoryService: UsersMemoryService,
    deleteService: DeleteUserService,
    createService: CreateUserService,
    updateService: UpdateUsersService,
    findService: FindUserService
  ) {
    super(
      getService,
      memoryService,
      deleteService,
      createService,
      updateService,
      findService
    );
  }
}
