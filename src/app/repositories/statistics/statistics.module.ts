import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NgChartsModule } from 'ng2-charts';

import { StateModule } from 'src/app/common';

import { ClassroomsMemoryService } from '../classrooms/memory';
import { GetClassroomsService } from '../classrooms/use-cases';
import { PeriodMemoryService } from '../periods/memory';
import { GetPeriodsService } from '../periods/use-cases';
import { StatisticsComponent } from './statistics.component';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsPageService } from './statistics-page.service';
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

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    NgChartsModule,
    StateModule,
  ],
  providers: [
    StatisticsPageService,
    GetStatisticsPeriodComparisonService,
    GetStatisticsTeachersByDayService,
    GetStatisticsByDepartmentService,
    GetStatisticsBySubjectService,
    GetStatisticsTeacherWorkloadService,
    GetStatisticsClassroomUsageService,
    GetStatisticsStartTimeDistributionService,
    GetStatisticsSectionOpenDistributionService,
    GetStatisticsTimelineService,
    GetStatisticsByCareerService,
    GetStatisticsByCurriculumSemesterService,
    GetPeriodsService,
    PeriodMemoryService,
    GetClassroomsService,
    ClassroomsMemoryService,
  ],
})
export class StatisticsModule {}
