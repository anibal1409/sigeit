import { Injectable } from '@angular/core';

import { DepartmentService } from 'dashboard-sdk';
import {
  map,
  Observable,
  tap,
} from 'rxjs';

import { UseCase } from '../../../../common';
import { DepartmentsMemoryService } from '../../memory';

@Injectable()
export class DeleteDepartmentService implements UseCase<number, number> {
  constructor(
    private departmentService: DepartmentService,
    private memoryService: DepartmentsMemoryService,
  ) {}

  exec(id: number): Observable<number> {
    return this.departmentService.departmentControllerRemove(id).pipe(
      map(() => 1),
      tap(() => {
        this.memoryService.delete(id);
      })
    );
  }
}