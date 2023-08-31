import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common';
import { SchoolItemVM } from '../../model';

@Injectable()
export class SchoolMemoryService extends MemoryRepository<SchoolItemVM> {
  constructor() {
    super();
  }
}
