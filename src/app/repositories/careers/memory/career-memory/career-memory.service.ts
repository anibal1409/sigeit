import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common/memory-repository';
import { CareerItemVM } from '../../model';

@Injectable()
export class CareerMemoryService extends MemoryRepository<CareerItemVM> {
  constructor() {
    super();
  }
}