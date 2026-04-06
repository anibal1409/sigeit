import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { GetClassroomsService } from '../classrooms/use-cases';
import { GetPeriodsService } from '../periods/use-cases';
import {
  CareerSectionStatItemVM,
  ClassroomUsageStatItemVM,
  CurriculumSemesterStatItemVM,
  DepartmentStatItemVM,
  PeriodComparisonStatVM,
  SectionOpenStatItemVM,
  StartTimeSlotStatItemVM,
  SubjectStatItemVM,
  TeacherWorkloadStatItemVM,
  TeachersByDayResponseVM,
  TimelineStatItemVM,
} from './model';
import { GetStatisticsByCareerService } from './use-cases/get-statistics-by-career/get-statistics-by-career.service';
import { GetStatisticsByCurriculumSemesterService } from './use-cases/get-statistics-by-curriculum-semester/get-statistics-by-curriculum-semester.service';
import { GetStatisticsByDepartmentService } from './use-cases/get-statistics-by-department/get-statistics-by-department.service';
import { GetStatisticsBySubjectService } from './use-cases/get-statistics-by-subject/get-statistics-by-subject.service';
import { GetStatisticsClassroomUsageService } from './use-cases/get-statistics-classroom-usage/get-statistics-classroom-usage.service';
import { GetStatisticsPeriodComparisonService } from './use-cases/get-statistics-period-comparison/get-statistics-period-comparison.service';
import { GetStatisticsSectionOpenDistributionService } from './use-cases/get-statistics-section-open-distribution/get-statistics-section-open-distribution.service';
import { GetStatisticsStartTimeDistributionService } from './use-cases/get-statistics-start-time-distribution/get-statistics-start-time-distribution.service';
import { GetStatisticsTeacherWorkloadService } from './use-cases/get-statistics-teacher-workload/get-statistics-teacher-workload.service';
import { GetStatisticsTeachersByDayService } from './use-cases/get-statistics-teachers-by-day/get-statistics-teachers-by-day.service';
import { GetStatisticsTimelineService } from './use-cases/get-statistics-timeline/get-statistics-timeline.service';

/**
 * Orquestador de la pantalla Estadísticas (no confundir con StatisticsService del SDK).
 */
@Injectable()
export class StatisticsPageService {
  constructor(
    private readonly getPeriodComparison: GetStatisticsPeriodComparisonService,
    private readonly getTeachersByDay: GetStatisticsTeachersByDayService,
    private readonly getByDepartment: GetStatisticsByDepartmentService,
    private readonly getBySubject: GetStatisticsBySubjectService,
    private readonly getTeacherWorkload: GetStatisticsTeacherWorkloadService,
    private readonly getClassroomUsage: GetStatisticsClassroomUsageService,
    private readonly getStartTimeDistribution: GetStatisticsStartTimeDistributionService,
    private readonly getSectionOpenDistribution: GetStatisticsSectionOpenDistributionService,
    private readonly getTimeline: GetStatisticsTimelineService,
    private readonly getByCareer: GetStatisticsByCareerService,
    private readonly getByCurriculumSemester: GetStatisticsByCurriculumSemesterService,
    private readonly getPeriodsService: GetPeriodsService,
    private readonly getClassroomsService: GetClassroomsService,
  ) {}

  getPeriodsForSelect$() {
    return this.getPeriodsService.exec({}, false);
  }

  getClassroomsForFilter$(departmentId?: number) {
    return this.getClassroomsService.exec(
      { departmentId, status: true },
      false,
    );
  }

  getPeriodComparison$(
    periodIds: number[],
  ): Observable<PeriodComparisonStatVM> {
    return this.getPeriodComparison.exec({ periodIds });
  }

  getTeachersByDay$(periodId: number): Observable<TeachersByDayResponseVM> {
    return this.getTeachersByDay.exec({ periodId });
  }

  getByDepartment$(periodId: number): Observable<Array<DepartmentStatItemVM>> {
    return this.getByDepartment.exec({ periodId });
  }

  getBySubject$(periodId: number): Observable<Array<SubjectStatItemVM>> {
    return this.getBySubject.exec({ periodId });
  }

  getTeacherWorkload$(
    periodId: number,
  ): Observable<Array<TeacherWorkloadStatItemVM>> {
    return this.getTeacherWorkload.exec({ periodId });
  }

  getClassroomUsage$(
    periodId: number,
    classroomId?: number,
  ): Observable<Array<ClassroomUsageStatItemVM>> {
    return this.getClassroomUsage.exec({ periodId, classroomId });
  }

  getStartTimeDistribution$(
    periodId: number,
    classroomId?: number,
  ): Observable<Array<StartTimeSlotStatItemVM>> {
    return this.getStartTimeDistribution.exec({ periodId, classroomId });
  }

  getSectionOpenDistribution$(
    periodId: number,
  ): Observable<Array<SectionOpenStatItemVM>> {
    return this.getSectionOpenDistribution.exec({ periodId });
  }

  getTimeline$(): Observable<Array<TimelineStatItemVM>> {
    return this.getTimeline.exec();
  }

  getByCareer$(periodId: number): Observable<Array<CareerSectionStatItemVM>> {
    return this.getByCareer.exec({ periodId });
  }

  getByCurriculumSemester$(
    periodId: number,
  ): Observable<Array<CurriculumSemesterStatItemVM>> {
    return this.getByCurriculumSemester.exec({ periodId });
  }
}
