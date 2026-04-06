import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Configuration, PeriodComparisonResponseDto } from 'dashboard-sdk';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PeriodComparisonResponseDto2PeriodComparisonStatVM } from '../../mappers';
import {
  PeriodComparisonStatVM,
  StatisticsPeriodComparisonQuery,
} from '../../model';

/**
 * GET /statistics/period-comparison?periodIds=1,2,3 (coma; el SDK OpenAPI repite el param).
 */
@Injectable()
export class GetStatisticsPeriodComparisonService {
  constructor(
    private readonly http: HttpClient,
    private readonly configuration: Configuration,
  ) {}

  private get apiBase(): string {
    return (this.configuration.basePath || '') as string;
  }

  exec(
    data: StatisticsPeriodComparisonQuery,
  ): Observable<PeriodComparisonStatVM> {
    const params = new HttpParams().set('periodIds', data.periodIds.join(','));
    return this.http
      .get<PeriodComparisonResponseDto>(
        `${this.apiBase}/statistics/period-comparison`,
        { params, withCredentials: true },
      )
      .pipe(map(PeriodComparisonResponseDto2PeriodComparisonStatVM));
  }
}
