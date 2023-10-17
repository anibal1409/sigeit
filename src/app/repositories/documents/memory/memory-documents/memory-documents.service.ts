import { Injectable } from '@angular/core';

import { MemoryRepository } from '../../../../common/memory-repository';
import { DocumentItemVM } from '../../model/document-item-vm';

@Injectable()
export class MemoryDocumentsService extends MemoryRepository<DocumentItemVM> {
  constructor() {
    super();
  }
}