import { Injectable } from '@angular/core';

import { ListComponentService } from '../../common';
import { SchoolMemoryService } from './memory';
import { SchoolItemVM } from './model';
import {
  CreateSchoolService,
  DeleteSchoolService,
  FindSchoolService,
  GetSchoolsService,
  UpdateSchoolService,
} from './use-cases';

@Injectable()
export class SchoolsService extends ListComponentService<SchoolItemVM> {
  constructor(
    public getSchoolsService: GetSchoolsService,
    public schoolMemoryService: SchoolMemoryService,
    public createSchoolService: CreateSchoolService,
    public deleteSchoolService: DeleteSchoolService,
    public findSchoolService: FindSchoolService,
    public updateSchoolService: UpdateSchoolService,
  ) {
    super(
      getSchoolsService,
      schoolMemoryService,
      deleteSchoolService,
      createSchoolService,
      updateSchoolService,
      findSchoolService,
    );
  }
}
