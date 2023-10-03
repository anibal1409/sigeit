import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common/memory-repository';
import { SubjectItemVM } from '../../model';

@Injectable()
export class SubjectMemoryService extends MemoryRepository<SubjectItemVM> {
  constructor() {
    super();
  }
}