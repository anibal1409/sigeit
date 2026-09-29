import { Injectable } from '@angular/core';

import {
  DepartmentService,
  ImportSubjectDemandResultDto,
  PeriodService,
  ResponseDepartmentDto,
  ResponsePeriodDto,
  ResponseSubjectDemandDto,
  SubjectDemandService,
} from 'dashboard-sdk';
import { Observable } from 'rxjs';

@Injectable()
export class SubjectDemandsService {
  constructor(
    private subjectDemandService: SubjectDemandService,
    private periodService: PeriodService,
    private departmentService: DepartmentService,
  ) {}

  getPeriods$(): Observable<Array<ResponsePeriodDto>> {
    return this.periodService.periodControllerFindAll();
  }

  getDepartments$(schoolId?: number): Observable<Array<ResponseDepartmentDto>> {
    return this.departmentService.departmentControllerFindAll(schoolId, true);
  }

  getDemand$(periodId: number, departmentId?: number): Observable<Array<ResponseSubjectDemandDto>> {
    return this.subjectDemandService.subjectDemandControllerFindAllPeriod(periodId, departmentId);
  }

  import$(periodId: number, file: File): Observable<ImportSubjectDemandResultDto> {
    return this.subjectDemandService.subjectDemandControllerImport(periodId, file);
  }
}
