import { Injectable } from '@angular/core';

import { SectionService } from 'dashboard-sdk';
import { GenerateReportDto } from 'dashboard-sdk';
import {
  map,
  Observable,
} from 'rxjs';

import { UseCase } from '../../../../common/memory-repository';

@Injectable()
export class GenerateReportService
  implements UseCase<Blob, GenerateReportDto>
{
  constructor(
    private entityService: SectionService,
  ) { }

  exec(reportParams: GenerateReportDto): Observable<Blob> {
    return this.entityService.sectionControllerGenerateReport(reportParams, 'response')
      .pipe(
        map((response: any) => response)
      );
  }
} 