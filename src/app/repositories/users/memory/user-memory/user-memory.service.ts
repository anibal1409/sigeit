import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common/memory-repository';
import { UserItemVM } from '../../model';

@Injectable()
export class UserMemoryService extends MemoryRepository<UserItemVM> {
  constructor() {
    super();
  }
}
