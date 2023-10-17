import { Injectable } from '@angular/core';

import { SubjectService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Subject2SubjectItemVM } from '../../mappers';
import { SubjectMemoryService } from '../../memory';
import {
  SubjectItemVM,
  SubjectVM,
} from '../../model';

@Injectable()
export class UpdateSubjectService
  implements UseCase<SubjectItemVM | null, SubjectVM>
{
  constructor(
    private entityServices: SubjectService,
    private memoryService: SubjectMemoryService,
  ) { }

  exec(entitySave: SubjectVM): Observable<SubjectItemVM | null> {
    return this.entityServices
      .subjectControllerUpdate({
        name: entitySave.name,
        status: !!entitySave.status,
        code: entitySave.code,
        credits: entitySave.credits,
        hours: entitySave.hours,
        semester: entitySave.semester,
        typeCurriculum: entitySave.typeCurriculum,
        description: entitySave.description,
        careers: entitySave.careerIds.map((id) => ({ id })),
        department: { id: entitySave.departmentId },
      }, entitySave.id || 0)
      .pipe(
        map(Subject2SubjectItemVM),
        tap((entity) => {
          this.memoryService.update(entity);
        })
      );
  }
}