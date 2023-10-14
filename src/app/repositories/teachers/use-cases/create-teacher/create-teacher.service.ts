import { Injectable } from '@angular/core';

import { TeacherService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { Teacher2TeacherItemVM } from '../../mappers';
import { TeacherMemoryService } from '../../memory';
import {
  TeacherItemVM,
  TeacherVM,
} from '../../model';

@Injectable()
export class CreateTeacherService
  implements UseCase<TeacherItemVM | null, TeacherVM>
{
  constructor(
    private entityServices: TeacherService,
    private memoryService: TeacherMemoryService,
  ) { }

  exec(entitySave: TeacherVM): Observable<TeacherItemVM> {
    return this.entityServices
      .teacherControllerCreate({
        status: !!entitySave.status,
        department: { id: entitySave.departmentId },
        firstName: entitySave.firstName,
        lastName: entitySave.lastName,
        idDocument: entitySave.idDocument,
        email: entitySave.email,
      })
      .pipe(
        map(Teacher2TeacherItemVM),
        tap((entity) => {
          this.memoryService.create(entity);
        })
      );
  }
}
