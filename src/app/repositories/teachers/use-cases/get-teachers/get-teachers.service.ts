import { Injectable } from '@angular/core';

import { TeacherService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';
import { Teacher2TeacherItemVM } from '../../mappers';
import { TeacherMemoryService } from '../../memory';
import {
  TeacherBaseQuery,
  TeacherItemVM,
} from '../../model';

@Injectable()
export class GetTeachersService
implements UseCase<Array<TeacherItemVM> | null, TeacherBaseQuery> {

  constructor(
    private entityServices: TeacherService,
    private memoryService: TeacherMemoryService,
  ) {}

  exec(data: TeacherBaseQuery = {}): Observable<Array<TeacherItemVM>> {
    return this.entityServices.teacherControllerFindAll()
    .pipe(
      map((entities: any) => entities.map(Teacher2TeacherItemVM)),
      tap((entity) => {
        this.memoryService.setDataSource(entity);
      })
    );
  }
}
