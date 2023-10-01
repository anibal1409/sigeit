import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common';
import { PeriodItemVM } from '../../model';

@Injectable()
export class PeriodMemoryService extends MemoryRepository<PeriodItemVM> {
  constructor() {
    super();
  }
}