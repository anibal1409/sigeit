import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common';
import { DepartmentItemVM } from '../../model';

@Injectable()
export class DepartmentsMemoryService extends MemoryRepository<DepartmentItemVM> {
  constructor() {
    super();
  }
}
