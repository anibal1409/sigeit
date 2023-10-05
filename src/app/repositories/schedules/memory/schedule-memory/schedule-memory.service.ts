import { Injectable } from '@angular/core';

import { ScheduleItemVM } from '../../';
import {
  MemoryRepository,
} from '../../../../common/memory-repository/memory-repository';

@Injectable()
export class ScheduleMemoryService extends MemoryRepository<ScheduleItemVM> {
  constructor() {
    super();
  }
}
