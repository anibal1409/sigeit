import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import moment from 'moment';
import {
  map,
  Observable,
  of,
  startWith,
  Subscription,
} from 'rxjs';
import { StateService } from 'src/app/common/state';

import { timeValidator } from '../../../common';
import { ClassroomVM } from '../../classrooms/model';
import { SectionItemVM } from '../../sections';
import {
  DayVM,
  ScheduleItemVM,
} from '../model';
import { SchedulesService } from '../scheludes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  sectionId!: number;

  @Input()
  scheduleId!: number;

  @Input()
  periodId!: number;

  @Input()
  departmentId!: number;

  @Input()
  teacherId!: number;

  @Output()
  closed = new EventEmitter();

  @Output()
  cancel = new EventEmitter();
  submitDisabled = true;

  form!: FormGroup;

  allClassroomsCtrl = new FormControl(false);
  allClassrooms = false;

  classrooms: Array<ClassroomVM> = [];
  days: Array<DayVM> = [];
  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];

  obs_startInterval!: Observable<Array<string>>;
  obs_endInterval!: Observable<Array<string>>;
  filteredDays!: Observable<DayVM[]>;
  filteredClassrooms!: Observable<ClassroomVM[]>;

  private sub$ = new Subscription();
  loading = false;
  title = '';
  classroomScheduleClash = '';
  teacherScheduleClash = '';

  constructor(
    private schedulesService: SchedulesService,
    private fb: FormBuilder,
    private stateService: StateService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sectionId']?.currentValue || changes['periodId']?.currentValue) {
      this.loadDataForm();
    } else if (changes['departmentId']?.currentValue) {
      this.loadClassrooms();
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.loadClassrooms();
    this.sub$.add(
      this.schedulesService.getDays$().subscribe((days) => {
        this.days = days;
        if (this.days) {
          this.filteredDays = this.form.controls['dayId'].valueChanges.pipe(
            startWith<string | DayVM>(''),
            map((value: any) => {
              if (value !== null) {
                return typeof value === 'string' ? value : value.name;
              }
              return '';
            }),
            map((name: any) => {
              return name ? this._daysFilter(name) : this.days.slice();
            })
          );
        }
      })
    );
    this.sub$.add(
      this.schedulesService.findPeriod$(this.periodId).subscribe((period) => {
        const intervals = this.schedulesService.generateTimeIntervalsStartEnd(
          period.start_time,
          period.end_time,
          period.duration,
          period.interval
        );
        this.startIntervals = intervals.start;
        this.endIntervals = intervals.end;

        this.obs_startInterval = of(
          this.startIntervals.map((interval) => {
            return interval;
          })
        );
        this.obs_endInterval = of(
          this.endIntervals.map((interval) => {
            return interval;
          })
        );
      })
    );
    if (this.scheduleId) {
      this.title = 'Editar Horario';
      this.sub$.add(
        this.schedulesService
          .findSchedule$(this.sectionId)
          .subscribe((schedule) => {
            if (schedule) {
              this.form.patchValue({
                ...schedule,
              });
            }
          })
      );
    } else {
      this.title = 'Crear Horario';
    }
    this.sub$.add(
      this.form.get('dayId')?.valueChanges.subscribe((day) => {
        if (day && day.id) {
          this.filteredDays = of(this.days);
        }
      })
    );

    this.sub$.add(
      this.form.get('classroomId')?.valueChanges.subscribe((classroom) => {
        if (classroom && classroom.id) {
          this.filteredClassrooms = of(this.classrooms);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private loadDataForm(): void {
    this.form?.patchValue(
      {
        sectionId: this.sectionId,
        periodId: this.periodId,
      },
      { emitEvent: false }
    );
  }

  private createForm(): void {
    this.form = this.fb.group({
      classroomId: [null, [Validators.required]],
      dayId: [null, [Validators.required]],
      start: [null, [Validators.required]],
      end: [null, [Validators.required, timeValidator()]],
      sectionId: [this.sectionId, [Validators.required]],
      periodId: [this.periodId, [Validators.required]]
    });

    this.sub$.add(
      this.allClassroomsCtrl.valueChanges.subscribe((val) => {
        this.allClassrooms = val as boolean;
        this.loadClassrooms();
      })
    );

    this.sub$.add(
      this.form.valueChanges.subscribe((values) => {
        this.validateClassroomSchedules(values);
        this.validateTeacherSchedules(values);
      })
    );

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled = this.form.invalid;
      })
    );
  }

  private validateClassroomSchedules(values: any): void {
    if (this.form.valid && values?.classroomId?.type !== 'VIRTUAL') {
      const data = {
        ...values,
        classroomId: values?.classroomId?.id || values?.classroomId,
        dayId: values?.dayId?.id || values?.dayId
      };
      this.schedulesService
        .validateClassroomSchedules$(data)
        .subscribe((data) => {
          console.log(data);
          const collapsedSchedules = data.map((schedule: ScheduleItemVM) => {
            const start = moment(schedule.start, 'HH:mm');
            const end = moment(schedule.end, 'HH:mm');
            return `<li>${start.format('HH:mm')} - ${end.format('HH:mm')} (${schedule.section?.subject?.name
              } - ${schedule.section?.name})</li>`;
          });

          if (collapsedSchedules?.length) {
            this.classroomScheduleClash = `El horario establecido presenta choques en el aula en los siguentes horarios:<ul>${collapsedSchedules}</ul>`.replace(/,/g, '');
          }
        });
    }
  }

  private validateTeacherSchedules(values: any): void {
    if (this.form.valid) {
      const data = {
        ...values,
        classroomId: values?.classroomId?.id || values?.classroomId,
        dayId: values?.dayId?.id || values?.dayId
      };
      this.sub$.add(
        this.schedulesService.validateTeacherSchedules$(data, this.teacherId, this.periodId).subscribe(
          (sections: Array<SectionItemVM>) => {
            console.log(sections);
            const collapsedSchedules = sections.map((section: SectionItemVM) => {
              return section.schedules?.map(
                (schedule: ScheduleItemVM) => {
                  const start = moment(schedule.start, 'HH:mm');
                  const end = moment(schedule.end, 'HH:mm');
                  return `<li>${start.format('HH:mm')} - ${end.format('HH:mm')} (${section?.subject?.name
                    } - ${section?.name})</li>`;
                }
              );
            });

            if (collapsedSchedules?.length) {
              this.teacherScheduleClash = `El horario establecido presenta choques en el profesor <strong>${sections[0].teacher?.last_name} ${sections[0].teacher?.first_name}</strong> en los siguentes horarios:<ul>${collapsedSchedules}</ul>`.replace(/,/g, '');
            }
          }
        )
      );
    }
  }

  save(): void {
    const schedule = this.form.value;
    schedule.classroomId = schedule.classroomId?.id || schedule.classroomId;
    schedule.dayId = schedule.dayId?.id || schedule.dayId;
    let obs;
    if (this.scheduleId) {
      schedule.id = this.scheduleId;
      obs = this.schedulesService.updateSchedule$(schedule);
    } else {
      obs = this.schedulesService.createSchedule$(schedule);
    }

    this.sub$.add(
      obs.subscribe(() => {
        this.scheduleId = 0;
        this.form.reset();
        this.loadDataForm();
        this.closed.emit();
      })
    );
  }

  clickCancel(): void {
    this.cancel.emit();
  }

  private loadClassrooms(): void {
    this.loading = true;
    this.stateService.setLoading(this.loading);
    this.sub$.add(
      this.schedulesService
        .getClassrooms$((!this.allClassrooms && this.departmentId) as any)
        .subscribe((classrooms) => {
          this.classrooms = classrooms;

          if (this.classrooms) {
            this.filteredClassrooms = this.form.controls[
              'classroomId'
            ].valueChanges.pipe(
              startWith<string | ClassroomVM>(''),
              map((value: any) => {
                if (value !== null) {
                  return typeof value === 'string' ? value : value.name;
                }
                return '';
              }),
              map((name: any) => {
                return name
                  ? this._classroomsFilter(name)
                  : this.classrooms.slice();
              })
            );
          }
          this.loading = false;
          setTimeout(() => this.stateService.setLoading(this.loading), 200);
        })
    );
  }

  displayFn(item: ClassroomVM | DayVM | any): string {
    return item?.name;
  }

  private _daysFilter(name: string): DayVM[] {
    const filterValue = name.toLowerCase();
    return this.days.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
  private _classroomsFilter(name: string): ClassroomVM[] {
    const filterValue = name.toLowerCase();
    return this.classrooms.filter(
      (option) => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  displayHours(item: ClassroomVM | DayVM | any): string {
    return item?.hour;
  }
}
