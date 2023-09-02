import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common';
import { ClassroomItemVM } from '../../model';

@Injectable()
export class ClassroomsMemoryService extends MemoryRepository<ClassroomItemVM> {
  constructor() {
    super();
  }
}
