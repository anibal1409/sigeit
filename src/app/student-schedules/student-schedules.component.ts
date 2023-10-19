import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import {
  SEMESTERS,
  SemesterVM,
} from '../common';
import { StateService } from '../common/state';
import { CareerVM } from '../repositories/careers';
import {
  PeriodVM,
  StagePeriod,
} from '../repositories/periods';
import {
  DayVM,
  ScheduleDetailsComponent,
  ScheduleItemVM,
} from '../repositories/schedules';
import { SectionItemVM } from '../repositories/sections';
import { SubjectVM } from '../repositories/subjects';
import { StudentSchedulesService } from './student-schedules.service';

@Component({
  selector: 'app-student-schedules',
  templateUrl: './student-schedules.component.html',
  styleUrls: ['./student-schedules.component.scss']
})
export class StudentSchedulesComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  careers: Array<CareerVM> = [];
  subjects: Array<SubjectVM> = [];
  semesters: Array<SemesterVM> = SEMESTERS;
  sections: Array<SectionItemVM> = [];
  period!: PeriodVM;
  carrerId!: number;
  subjectId!: number;
  semesterId!: number;
  sectionId!: number;
  loading = false;


  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];
  days: Array<DayVM> = [];
  dataSchedule: any[][] = this.startIntervals.map(() =>
    this.days.map(() => {
      return { text: '', schedules: [] };
    })
  );
  dataSource: any[] = [];
  displayedColumns: string[] = ['hora'];
  subjectsSelected = new Map<number, SectionItemVM>();
  sectionsSelected: Array<SectionItemVM> = [];
  credits = 0;
  subjectCounter = 0;
  private sub$ = new Subscription();

  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private stateService: StateService,
    private studentSchedulesService: StudentSchedulesService,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    this.sub$.add(
      this.studentSchedulesService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );

    this.loadActivePeriod();

  }

  private loadActivePeriod(): void {
    this.sub$.add(
      this.studentSchedulesService.getActivePeriod$().subscribe(
        (period) => {
          if (period?.id && period?.stage !== StagePeriod.toPlan || true) {
            this.period = period;
            const intervals = this.studentSchedulesService.intervals(
              period.startTime,
              period.endTime,
              period.duration,
              period.interval
            );
            this.startIntervals = intervals.start;
            this.endIntervals = intervals.end;
            this.loadDays();
            this.loadCareers();
          }
        }
      )
    );
  }

  private loadDays(): void {
    if (this.period.id) {
      this.sub$.add(
        this.studentSchedulesService.getDays$().subscribe(
          (days) => {
            this.days = days;
            this.displayedColumns = ['hora'];
            days.forEach((day) => {
              this.displayedColumns.push(day.name);
            });
          }
        )
      );
    }
  }

  private loadCareers(): void {
    this.sub$.add(
      this.studentSchedulesService.getCareers$().subscribe(
        (careers) => {
          this.careers = careers;
        }
      )
    );
  }

  private loadSubjects(): void {
    if (this.carrerId) {
      this.sub$.add(
        this.studentSchedulesService.getSubjects$({
          carrerId: this.carrerId,
          semester: this.semesterId > 0 ? this.semesterId : undefined
        }).subscribe(
          (subjects) => {
            this.subjects = subjects;
          }
        )
      );
    }
  }

  private loadSectionsWithSchedules(): void {
    if (this.subjectId) {
      this.sub$.add(
        this.studentSchedulesService.getSectionWithSchedules$({
          subjectId: this.subjectId,
          periodId: this.period.id,
        }).subscribe(
          (sections) => {
            console.log(sections);
            this.sections = sections;
          }
        )
      );
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      careerId: [null, [Validators.required]],
      subjectId: [null, [Validators.required]],
      semesterId: [null, [Validators.required]],
    });

    this.sub$.add(
      this.form.get('careerId')?.valueChanges.subscribe((carrerId) => {
        this.carrerId = +carrerId;
        this.semesterId = 0;
        this.subjectId = 0;
        this.sectionId = 0;

        this.form.patchValue({
          semesterId: null,
          subjectId: null,
          sectionId: null,
        });

        if (carrerId) {
          this.loadSubjects();
          this.form.patchValue({
            semesterId: this.semesters[0].id,
          });
        }
      })
    );

    this.sub$.add(
      this.form.get('semesterId')?.valueChanges.subscribe((semesterId) => {
        this.semesterId = +semesterId;
        if (semesterId) {
          this.form.patchValue({
            subjectId: null,
            sectionId: null,
          });
          this.loadSubjects();
        }
      })
    );

    this.sub$.add(
      this.form.get('subjectId')?.valueChanges.subscribe((subjectId) => {
        this.subjectId = +subjectId;
        this.form.patchValue({
          sectionId: null,
        });
        if (subjectId) {
          this.loadSectionsWithSchedules();
        }
      })
    );
  }

  showScheduleDetails(schedules: Array<ScheduleItemVM>): void {
    const dialogRef = this.matDialog.open(ScheduleDetailsComponent, {
      data: {
        schedules: schedules,
      },
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
    });
  }

  addSection(section: SectionItemVM): void {
    const key = section.subject?.id as any;

    if (!this.subjectsSelected.has(key)) {
      this.subjectsSelected.set(key, section);
    } else {
      const sectionS = this.subjectsSelected.get(key);
      if (sectionS?.id === section.id) {
        this.subjectsSelected.delete(key);
      } else {
        this.subjectsSelected.set(key, section);
      }
    }

    this.sectionsSelected = [...this.subjectsSelected.values()];
    this.loadSchedules();
  }

  private clearSchedule(): void {
    this.dataSchedule = this.startIntervals.map(() =>
      this.days.map(() => {
        return { text: '', schedules: [] };
      })
    );
    this.dataSource = [];
  }

  private loadSchedules(): void {
    this.credits = this.sectionsSelected.reduce((acc, section) => acc + (section?.subject?.credits || 0), 0);
    this.subjectCounter = this.sectionsSelected.length;
    this.clearSchedule();
    const schedules = this.sectionsSelected.flatMap(
      (section) => section.schedules
    );
    this.clearCollapseSections();

    schedules.forEach((schedule) => {
      if (!schedule) {
        return;
      }
      const dayIndex = this.days.findIndex(
        (day) => day.id === schedule.day?.id
      );
      const startIndex = this.startIntervals.indexOf(schedule.start);
      const endIndex = this.endIntervals.indexOf(schedule.end);

      for (let i = startIndex; i <= endIndex; i++) {

        this.dataSchedule[i][dayIndex].schedules.push(schedule);
        if (this.dataSchedule[i][dayIndex]?.text) {
          this.dataSchedule[i][dayIndex].text = 'Varias';
          this.collapseSections(this.dataSchedule[i][dayIndex].schedules);
        } else {
          this.dataSchedule[i][
            dayIndex
          ].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
        }
      }
    });

    this.dataSource = this.startIntervals.map(
      (hora, index) => {
        const row: any = { hora };
        this.days.forEach((day, dayIndex) => {
          row[day.name] = this.dataSchedule[index][dayIndex];
        });
        return row;
      }
    );
  }

  private clearCollapseSections(): void {
    const sections = [...this.subjectsSelected.values()];
    sections.forEach((section) => {
      section.collapse = [];
    }
    );

    sections.forEach(
      (section) => {
        const key = section?.subject?.id as any;
        this.subjectsSelected.set(key, section);
      }
    );

    this.sectionsSelected = [...this.subjectsSelected.values()];
  }

  private collapseSections(schedules: Array<ScheduleItemVM>): void {
    const sections = [...this.subjectsSelected.values()];

    schedules.forEach(
      (schedule) => {
        const index = sections.findIndex((section) => (section.id === schedule.section?.id));
        if (index >= 0) {
          const schedulesX = schedules.filter((s) => (s.section?.id !== sections[index].id));
          if (sections[index]?.collapse?.length === 0) {
            sections[index].collapse = schedulesX;
          } else {
            schedulesX.forEach(
              (scheduleX) => {
                if (!sections[index].collapse?.find((c) => c.id === scheduleX.id)) {
                  sections[index].collapse?.push(scheduleX);
                }
              }
            );

          }
        }
      }
    );
    this.subjectsSelected.clear();
    sections.forEach(
      (section) => {
        const key = section?.subject?.id as any;
        this.subjectsSelected.set(key, section);
      }
    );

    this.sectionsSelected = [...this.subjectsSelected.values()];
  }
}
