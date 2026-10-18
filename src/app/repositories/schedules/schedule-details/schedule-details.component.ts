import {
  Component,
  EventEmitter,
  Inject,
  OnDestroy,
  Optional,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ScheduleService } from 'dashboard-sdk';
import { Subscription } from 'rxjs';

import { Schedule2ScheduleItemVM } from '../mappers';

import { ScheduleItemVM } from '../model';

export interface ScheduleDetailsData {
  schedules: Array<ScheduleItemVM>;
}

interface SectionGroup {
  section: ScheduleItemVM['section'];
  schedules: Array<ScheduleItemVM>;
}

/** Tamaño del diálogo: alto y ancho suficientes para ver asignatura, profesor y todos los bloques. */
export const SCHEDULE_DETAILS_DIALOG = {
  width: '40rem',
  maxWidth: '96vw',
  maxHeight: '90vh',
  panelClass: 'schedule-details-dialog',
  autoFocus: false,
} as const;

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.scss'],
})
export class ScheduleDetailsComponent implements OnDestroy {
  @Output()
  closed = new EventEmitter<void>();

  readonly groups: Array<SectionGroup>;

  /** Bloques con el panel de "mismo horario en otras aulas" abierto. */
  readonly openParallels = new Set<number>();
  /** Resultado por id de bloque; null si falló la consulta. */
  readonly parallels = new Map<number, Array<ScheduleItemVM> | null>();
  private readonly sub$ = new Subscription();

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) data: ScheduleDetailsData | null,
    private scheduleApi: ScheduleService,
  ) {
    this.groups = groupBySection(data?.schedules || []);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  toggleParallels(schedule: ScheduleItemVM): void {
    const id = schedule.id;
    if (!id) {
      return;
    }
    if (this.openParallels.delete(id)) {
      return;
    }
    this.openParallels.add(id);
    if (this.parallels.has(id)) {
      return;
    }
    this.sub$.add(
      this.scheduleApi
        .scheduleControllerFindAll(
          schedule.periodId || 0, undefined, undefined, schedule.periodId,
          undefined, undefined, schedule.dayId, undefined, undefined, true,
        )
        .subscribe({
          next: (items) => this.parallels.set(
            id,
            items
              .map(Schedule2ScheduleItemVM)
              // Mismo bloque = misma hora de inicio; la hora de fin puede variar.
              .filter((s) => s.start === schedule.start
                && s.classroomId !== schedule.classroomId
                && s.sectionId !== schedule.sectionId),
          ),
          error: () => this.parallels.set(id, null),
        }),
    );
  }

  teacherName(section: ScheduleItemVM['section']): string {
    const teacher = section?.teacher;
    if (!teacher) {
      return 'Por asignar';
    }
    if (teacher.lastName) {
      return `${teacher.lastName}, ${teacher.firstName}`;
    }
    return teacher.firstName || 'Por asignar';
  }

  clickClosed(): void {
    this.closed.emit();
  }
}

function groupBySection(schedules: Array<ScheduleItemVM>): Array<SectionGroup> {
  const grouped = new Map<number | string, SectionGroup>();

  schedules.forEach((schedule) => {
    const key = schedule.section?.id ?? `orphan-${schedule.id}`;
    let group = grouped.get(key);
    if (!group) {
      group = { section: schedule.section, schedules: [] };
      grouped.set(key, group);
    }
    group.schedules.push(schedule);
  });

  return [...grouped.values()].map((group) => ({
    ...group,
    schedules: [...group.schedules].sort(
      (a, b) => (a.day?.id || 0) - (b.day?.id || 0) || a.start.localeCompare(b.start),
    ),
  }));
}
