import { Injectable } from '@angular/core';

import { TeacherService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import {
  Teacher2TeacherItemVM,
  TeacherVM2TeacherDto,
} from '../../mappers';
import { TeacherMemoryService } from '../../memory';
import {
  TeacherItemVM,
  TeacherVM,
} from '../../model';

@Injectable()
export class UpdateTeacherService
  implements UseCase<TeacherItemVM | null, TeacherVM>
{
  constructor(
    private entityServices: TeacherService,
    private memoryService: TeacherMemoryService,
  ) { }

  exec(entitySave: TeacherVM): Observable<TeacherItemVM | null> {
    return this.entityServices
      .teacherControllerUpdate(entitySave.id || 0, TeacherVM2TeacherDto(entitySave))
      .pipe(
        map(Teacher2TeacherItemVM),
        tap((entity) => {
          this.memoryService.update(entity);
        })
      );
  }
}
