import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common/memory-repository';
import { TeacherItemVM } from '../../model';

@Injectable()
export class TeacherMemoryService extends MemoryRepository<TeacherItemVM> {
  constructor() {
    super();
  }
}
