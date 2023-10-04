import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common/memory-repository';
import { SectionItemVM } from '../../model';

@Injectable()
export class SectionMemoryService extends MemoryRepository<SectionItemVM> {
  constructor() {
    super();
  }
}
