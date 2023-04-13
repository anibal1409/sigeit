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
  finalize,
  map,
  Observable,
  of,
  startWith,
  Subscription,
  tap,
} from 'rxjs';
import { StateService } from 'src/app/common/state';

import { ConfirmModalComponent, timeValidator } from '../../../common';
import { ClassroomVM } from '../../classrooms/model';
import { DayVM } from '../model';
import { SchedulesService } from '../scheludes.service';
import { MatDialog } from '@angular/material/dialog';

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

  crashWarning = false;
  crashMessage = 'El horario a inscribir presenta los siguientes choques: <br>';

  private sub$ = new Subscription();
  loading = false;
  title = '';

  constructor(
    private schedulesService: SchedulesService,
    private fb: FormBuilder,
    private stateService: StateService,
    private matDialog: MatDialog
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['sectionId']?.currentValue ||
      changes['periodId']?.currentValue
    ) {
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
      periodId: [this.periodId, [Validators.required]],
    });

    this.sub$.add(
      this.allClassroomsCtrl.valueChanges.subscribe((val) => {
        this.allClassrooms = val as boolean;
        this.loadClassrooms();
      })
    );

    this.sub$.add(
      this.form.valueChanges.subscribe((values) => {
        if (this.form.valid) {
          this.loading = true;
          this.stateService.setLoading(this.loading);
          const data = {
            ...values,
            classroomId: values?.classroomId?.id || values?.classroomId,
            dayId: values?.dayId?.id || values?.dayId,
          };
          this.schedulesService
            .validateClassroomSchedules$(data)
            .pipe(
              finalize(() => {
                setTimeout(() => {
                  this.loading = false;
                  this.stateService.setLoading(this.loading);
                }, 300);
              })
            )
            .subscribe((data) => {
              data.map((horario: any) => {
                const start = moment.max(
                  moment(horario.start, 'HH:mm'),
                  moment(values.start, 'HH:mm')
                );
                const end = moment.min(
                  moment(horario.end, 'HH:mm'),
                  moment(values.end, 'HH:mm')
                );
                this.crashMessage =
                  this.crashMessage +
                  ` <strong>${start.format('HH:mm')} - ${end.format(
                    'HH:mm'
                  )} (${horario.section?.subject?.name} - ${
                    horario.section?.name
                  })</strong>`;
              });

              if (data.length !== 0) {
                this.crashWarning = true;
              } else {
                this.crashWarning = false;
              }
            });
        }
      })
    );

    this.sub$.add(
      this.form.valueChanges.subscribe(() => {
        this.submitDisabled = this.form.invalid;
      })
    );
  }

  saveWarning(): void {
    if (this.crashWarning) {
      const dialogRef = this.matDialog.open(ConfirmModalComponent, {
        data: {
          message: {
            title: 'Choque de Horas',
            body: this.crashMessage + '<br><br><h5>¿Desea continuar?</h5>',
          },
        },
        hasBackdrop: true,
      });

      dialogRef.componentInstance.closed.subscribe((res: any) => {
        dialogRef.close();
        this.crashMessage =
          'El horario a inscribir presenta los siguientes choques: <br>';
        if (res) {
          this.save();
        }
      });
    } else {
      this.save();
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
        .pipe(
          finalize(() => {
            this.loading = false;
            setTimeout(() => this.stateService.setLoading(this.loading), 500);
          })
        )
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
    return item?.hour || item;
  }
}
