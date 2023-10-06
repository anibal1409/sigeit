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

import { StateService } from '../../../common/state';
import { UserStateService } from '../../../common/user-state';
import { ClassroomVM } from '../../classrooms';
import { DepartmentItemVM } from '../../departments';
import { TeacherItemVM } from '../../teachers';
import {
  DayVM,
  ScheduleItemVM,
} from '../model';
import { ScheduleDetailsComponent } from '../schedule-details';
import { SchedulesService } from '../schedules.service';

@Component({
  selector: 'app-academic-charge-teacher',
  templateUrl: './academic-charge-teacher.component.html',
  styleUrls: ['./academic-charge-teacher.component.scss']
})
export class AcademicChargeTeacherComponent implements OnInit, OnDestroy {
  periodId!: number;
  teacherId!: number;
  allTeachers: boolean = false;
  departmentId!: number;
  form!: FormGroup;

  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];
  teachers: Array<TeacherItemVM> = [];
  departments: Array<DepartmentItemVM> = [];
  days: Array<DayVM> = [];
  dataSchedule: any[][] = this.startIntervals.map(() =>
    this.days.map(() => {
      return { text: '', schedules: [] };
    })
  );
  dataSourceByClassroom: any[] = [];
  displayedColumnsByClassroom: string[] = ['hora'];

  private sub$ = new Subscription();
  loading = false;

  constructor(
    private schedulesService: SchedulesService,
    private matDialog: MatDialog,
    private fb: FormBuilder,
    private stateService: StateService,
    private userStateService: UserStateService,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.createForm();
    this.sub$.add(
      this.schedulesService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
      })
    );

    this.sub$.add(
      this.schedulesService.getActivePeriod$().subscribe((period) => {
        if (period?.id) {
          this.periodId = period.id;
        }
      })
    );
    this.loadDays();
    this.loadIntervals();
    this.loadDepartments();
  }

  private createForm(): void {
    this.form = this.fb.group({
      departmentId: [null, [Validators.required]],
      teacherId: [null, [Validators.required]],
      allTeachers: [false],
    });

    this.sub$.add(
      this.form.get('departmentId')?.valueChanges.subscribe((departmentId) => {
        this.departmentId = +departmentId;
        this.teacherId = 0;

        this.form.patchValue({
          teacherId: null,
        });

        if (departmentId) {
          this.loadTeachers();
        }
      })
    );

    this.sub$.add(
      this.form.get('teacherId')?.valueChanges.subscribe((subjectId) => {
        this.teacherId = +subjectId;

        if (subjectId) {
          this.loadSchedules();
        } else {
          this.clearSchedule();
        }
      })
    );

    this.sub$.add(
      this.form.get('allTeachers')?.valueChanges.subscribe((allTeachers) => {
        this.allTeachers = allTeachers;
        this.loadTeachers();
      })
    );
  }

  private loadDays(): void {
    this.sub$.add(
      this.schedulesService
        .getDays$()
        .subscribe((days) => {
          this.days = days;
          this.displayedColumnsByClassroom = ['hora'];
          days.forEach((day) => {
            this.displayedColumnsByClassroom.push(day.name);
          });
        })
    );
  }

  private loadIntervals(): void {
    this.sub$.add(
      this.schedulesService
        .getActivePeriod$()
        .subscribe((period) => {
          if (period?.id) {
            this.periodId = period.id;
            const intervals = this.schedulesService.generateTimeIntervalsStartEnd(
              period.startTime,
              period.endTime,
              period.duration,
              period.interval
            );
            this.startIntervals = intervals.start;
            this.endIntervals = intervals.end;
          }
        })
    );
  }

  private clearSchedule(): void {
    this.dataSchedule = this.startIntervals.map(() =>
      this.days.map(() => {
        return { text: '', schedules: [] };
      })
    );
  }

  private loadSchedules(): void {
    if (this.teacherId) {
      this.sub$.add(
        this.schedulesService
          .getSchedules$({
            teacherId: this.teacherId,
            periodId: this.periodId,
            departmentId: this.allTeachers ? undefined : this.departmentId,
          })
          .subscribe((schedules) => {
            this.clearSchedule();

            schedules.forEach((schedule) => {
              const dayIndex = this.days.findIndex(
                (day) => day.id === schedule.day?.id
              );
              const startIndex = this.startIntervals.indexOf(schedule.start);
              const endIndex = this.endIntervals.indexOf(schedule.end);

              for (let i = startIndex; i <= endIndex; i++) {

                this.dataSchedule[i][dayIndex].schedules.push(schedule);
                if (this.dataSchedule[i][dayIndex]?.text) {
                  this.dataSchedule[i][dayIndex].text = 'Varias';
                } else {
                  this.dataSchedule[i][
                    dayIndex
                  ].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
                }
              }
            });

            this.dataSourceByClassroom = this.startIntervals.map(
              (hora, index) => {
                const row: any = { hora };
                this.days.forEach((day, dayIndex) => {
                  row[day.name] = this.dataSchedule[index][dayIndex];
                });
                return row;
              }
            );
          })
      );
    }
  }

  displayFn(item: ClassroomVM | DayVM | any): string {
    return item?.name;
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

  private loadDepartments(): void {
    this.sub$.add(
      this.schedulesService
        .getDepartaments$({ schoolId: this.userStateService.getSchoolId() })
        .subscribe((departaments) => {
          this.departments = departaments;
          if (departaments.length) {
            this.form.patchValue({
              departmentId: departaments[0]?.id,
            });
          }
        })
    );
  }

  private loadTeachers(): void {
    this.sub$.add(
      this.schedulesService
        .getTeachers$({ departmentId: this.allTeachers ? undefined : +this.departmentId })
        .subscribe((teachers) => {
          this.teachers = teachers;
        })
    );
  }
}
