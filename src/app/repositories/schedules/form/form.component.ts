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
import { HttpErrorResponse } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import {
  FreeSlotDto,
  ScheduleConflictsDto,
  ScheduleLiteDto,
} from 'dashboard-sdk';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  finalize,
  map,
  merge,
  Observable,
  of,
  Subscription,
  switchMap,
} from 'rxjs';

import { ConfirmModalComponent } from '../../../common/confirm-modal';
import { timeValidator } from '../../../common/timer';
import { ClassroomVM } from '../../classrooms/model';
import {
  DayVM,
  IntervalSelect,
  ScheduleVM,
} from '../model';
import { SchedulesService } from '../schedules.service';

/** Máximo de horas académicas seguidas que se ofrecen para un bloque. */
const MAX_BLOCK_HOURS = 6;
/** Sugerencias de bloques libres que se muestran a la vez. */
const MAX_SUGGESTIONS = 15;

/** Lista HTML de horarios en choque, precedida de un título; vacío si no hay. */
function clashHtml(title: string, items: Array<ScheduleLiteDto>): string {
  if (!items.length) {
    return '';
  }
  const rows = items
    .map((item) => `<li>${item.dayName} ${item.start} - ${item.end} (${item.subjectName} - ${item.sectionName}, ${item.classroomName})</li>`)
    .join('');
  return `${title}<ul>${rows}</ul>`;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
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
  /** Días adicionales en los que se repite el bloque (solo al crear). */
  extraDaysCtrl = new FormControl<Array<number>>([], { nonNullable: true });

  classrooms: Array<ClassroomVM> = [];
  days: Array<DayVM> = [];
  startIntervals: Array<IntervalSelect> = [];
  endIntervals: Array<IntervalSelect> = [];
  hoursOptions: Array<number> = [];

  /** Hay choques de cualquier tipo (incluye advertencias de nivel). */
  crashWarning = false;
  /** Hay choques de aula o profesor: el backend exige confirmar (force). */
  blocking = false;

  suggestions: Array<FreeSlotDto> = [];
  suggestionsTotal = 0;
  suggestionsLoaded = false;
  loadingSuggestions = false;

  private sub$ = new Subscription();
  loading = false;
  title = '';
  classroomScheduleClash = '';
  teacherScheduleClash = '';
  levelScheduleClash = '';

  constructor(
    private schedulesService: SchedulesService,
    private fb: FormBuilder,
    private matDialog: MatDialog
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sectionId']?.currentValue || changes['periodId']?.currentValue) {
      this.loadDataForm();
    } else if (changes['departmentId']?.currentValue) {
      this.loadClassrooms();
    } else if (changes['scheduleId']?.currentValue) {
      this.loadSchedule();
    }
  }

  ngOnInit(): void {
    this.createForm();
    this.loadClassrooms();
    this.sub$.add(
      this.schedulesService.getDays$().subscribe((days) => {
        this.days = days;
      })
    );
    this.sub$.add(
      this.schedulesService.getActivePeriod$().subscribe((period) => {
        if (period?.id) {
          this.periodId = period.id;
          const intervals = this.schedulesService.generateTimeIntervalsStartEndSelect(
            period.startTime,
            period.endTime,
            period.duration,
            period.interval
          );
          this.startIntervals = intervals.start;
          this.endIntervals = intervals.end;
          this.hoursOptions = Array.from(
            { length: Math.min(MAX_BLOCK_HOURS, intervals.start.length) },
            (_, index) => index + 1
          );
        }
      })
    );

    this.loadSchedule();
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
    this.form.reset();
    this.form.clearValidators();
    this.sectionId = 0;
    this.scheduleId = 0;
    this.departmentId = 0;
  }

  /** Días a los que se aplicará el bloque. */
  get dayIds(): Array<number> {
    const dayId = this.form.value.dayId;
    if (this.scheduleId) {
      return [dayId];
    }
    return [...new Set([dayId, ...this.extraDaysCtrl.value])];
  }

  /** Días que se pueden agregar como repetición (todos menos el principal). */
  get extraDays(): Array<DayVM> {
    return this.days.filter((day) => day.id !== this.form.value.dayId);
  }

  private loadSchedule(): void {
    if (!!this.scheduleId && !isNaN(this.scheduleId)) {
      this.title = 'Editar Horario';
      this.sub$.add(
        this.schedulesService
          .find$({ id: this.scheduleId })
          .subscribe((schedule) => {
            if (schedule) {
              this.form.patchValue({ ...schedule }, { emitEvent: false });
              this.syncHours();
              this.form.updateValueAndValidity();
            }
          })
      );
    } else {
      this.title = 'Crear Horario';
    }
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
      hours: [null],
      end: [null, [Validators.required, timeValidator()]],
      sectionId: [this.sectionId, [Validators.required]],
      periodId: [this.periodId, [Validators.required]],
      status: [true],
    });

    this.sub$.add(
      this.allClassroomsCtrl.valueChanges.subscribe((val) => {
        this.allClassrooms = val as boolean;
        this.loadClassrooms();
      })
    );
    this.sub$.add(this.form.get('start')?.valueChanges.subscribe(() => this.syncEnd()));
    this.sub$.add(this.form.get('hours')?.valueChanges.subscribe(() => this.syncEnd()));
    this.sub$.add(this.form.get('end')?.valueChanges.subscribe(() => this.syncHours()));
    this.sub$.add(
      this.form.statusChanges.subscribe(() => {
        this.submitDisabled = this.form.invalid;
      })
    );
    this.watchConflicts();
  }

  /**
   * Consulta los choques al backend cuando el bloque cambia. El debounce agrupa
   * cambios seguidos y switchMap descarta respuestas de bloques ya obsoletos.
   */
  private watchConflicts(): void {
    this.sub$.add(
      merge(this.form.valueChanges, this.extraDaysCtrl.valueChanges)
        .pipe(
          debounceTime(300),
          map(() => (this.form.valid ? { schedule: this.toSchedule(), dayIds: this.dayIds } : null)),
          distinctUntilChanged((a, b) => JSON.stringify(a) === JSON.stringify(b)),
          switchMap((candidate) =>
            candidate
              ? this.schedulesService
                .getConflicts$(candidate.schedule, candidate.dayIds)
                .pipe(catchError(() => of([])))
              : of([])
          )
        )
        .subscribe((conflicts) => this.setConflicts(conflicts))
    );
  }

  /** Calcula la hora de fin a partir del inicio y las horas académicas elegidas. */
  private syncEnd(): void {
    // getRawValue: `form.value` aún no refleja el control que acaba de cambiar.
    const { start, hours, end: current } = this.form.getRawValue();
    const index = this.startIntervals.findIndex((item) => item.id === start);
    const end = this.endIntervals[index + hours - 1]?.id;
    if (index >= 0 && hours && end && end !== current) {
      this.form.get('end')?.setValue(end);
    }
  }

  /** Refleja en el selector de horas el bloque elegido manualmente. */
  private syncHours(): void {
    const { start, end } = this.form.getRawValue();
    const startIndex = this.startIntervals.findIndex((item) => item.id === start);
    const endIndex = this.endIntervals.findIndex((item) => item.id === end);
    const hours = startIndex >= 0 && endIndex >= startIndex ? endIndex - startIndex + 1 : null;
    this.form.get('hours')?.setValue(hours, { emitEvent: false });
  }

  private toSchedule(): ScheduleVM {
    const { hours, ...values } = this.form.getRawValue();
    return { ...values, id: this.scheduleId || undefined };
  }

  private setConflicts(conflicts: Array<ScheduleConflictsDto>): void {
    const all = (type: 'classroom' | 'teacher' | 'level') => conflicts.flatMap((item) => item[type]);
    const teacher = all('teacher');
    const teacherName = teacher.find((item) => item.teacherName)?.teacherName;
    this.classroomScheduleClash = clashHtml('El aula ya está ocupada en:', all('classroom'));
    this.teacherScheduleClash = clashHtml(
      teacherName
        ? `El profesor <strong>${teacherName}</strong> o la sección ya tienen clase en:`
        : 'La sección ya tiene clase en:',
      teacher
    );
    this.levelScheduleClash = clashHtml(
      `Se solapa con asignaturas cuya demanda también se concentra en el nivel <strong>${conflicts[0]?.peakLevel}</strong>; los estudiantes de ese nivel tendrían que elegir entre ellas:`,
      all('level')
    );
    this.blocking = conflicts.some((item) => item.blocking);
    this.crashWarning = !!(this.classroomScheduleClash || this.teacherScheduleClash || this.levelScheduleClash);
  }

  private clashBody(): string {
    return [this.classroomScheduleClash, this.teacherScheduleClash, this.levelScheduleClash]
      .filter(Boolean)
      .join('<br>');
  }

  saveWarning(): void {
    if (this.crashWarning) {
      this.confirmClash(() => this.save(this.blocking));
    } else {
      this.save(false);
    }
  }

  /** Pide confirmación mostrando los choques; ejecuta `onConfirm` si el usuario acepta. */
  private confirmClash(onConfirm: () => void): void {
    const question = this.blocking
      ? '<h5>El aula, el profesor o la sección ya están ocupados en ese horario.<br>¿Desea guardar de todas formas?</h5>'
      : '<h5>¿Desea continuar?</h5>';
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: { message: { title: 'Choque de horarios', body: this.clashBody() + question } },
      hasBackdrop: true,
    });
    dialogRef.componentInstance.closed.subscribe((res: boolean) => {
      dialogRef.close();
      if (res) {
        onConfirm();
      }
    });
  }

  save(force: boolean): void {
    const schedule = { ...this.toSchedule(), force };
    const dayIds = this.dayIds;
    let obs: Observable<unknown>;
    if (this.scheduleId) {
      obs = this.schedulesService.update(schedule);
    } else if (dayIds.length > 1) {
      obs = this.schedulesService.createBulk$(schedule, dayIds);
    } else {
      obs = this.schedulesService.create(schedule);
    }

    this.sub$.add(
      obs.subscribe({
        next: () => {
          this.scheduleId = 0;
          this.form.reset();
          this.extraDaysCtrl.reset();
          this.loadDataForm();
          this.closed.emit();
        },
        error: (error: HttpErrorResponse) => this.handleSaveError(error),
      })
    );
  }

  /** Un 409 trae los choques detectados al guardar: se muestran y se ofrece forzar. */
  private handleSaveError(error: HttpErrorResponse): void {
    if (error.status === 409 && error.error?.conflicts) {
      this.setConflicts(error.error.conflicts);
      this.confirmClash(() => this.save(true));
      return;
    }
    const message = error.error?.message;
    this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'No se pudo guardar el horario',
          body: Array.isArray(message) ? message.join('<br>') : message || 'Error inesperado',
        },
        hiddenActions: true,
      },
      hasBackdrop: true,
    });
  }

  /** Pide al backend bloques donde la sección no choca, con aulas libres. */
  suggestSlots(): void {
    const { dayId, hours } = this.form.value;
    this.loadingSuggestions = true;
    this.sub$.add(
      this.schedulesService
        .getFreeSlots$({
          periodId: this.periodId,
          sectionId: this.sectionId,
          hours: hours || 1,
          dayId,
          allClassrooms: this.allClassrooms,
          excludeId: this.scheduleId,
        })
        .pipe(finalize(() => (this.loadingSuggestions = false)))
        .subscribe((slots) => {
          this.suggestionsTotal = slots.length;
          this.suggestions = [...slots]
            .sort((a, b) => Number(a.levelConflict) - Number(b.levelConflict))
            .slice(0, MAX_SUGGESTIONS);
          this.suggestionsLoaded = true;
        })
    );
  }

  /** Aplica un bloque sugerido; conserva el aula elegida si está libre en ese bloque. */
  applySlot(slot: FreeSlotDto): void {
    const current = this.form.value.classroomId;
    const classroomId = slot.classrooms.some((item) => item.id === current)
      ? current
      : slot.classrooms[0]?.id;
    this.form.patchValue({ dayId: slot.dayId, classroomId, start: slot.start, end: slot.end });
    this.suggestions = [];
    this.suggestionsLoaded = false;
  }

  clickCancel(): void {
    this.cancel.emit();
    this.ngOnDestroy();
  }

  private loadClassrooms(): void {
    this.sub$.add(
      this.schedulesService
        .getClassrooms$({
          departmentId: this.allClassrooms ? undefined : this.departmentId,
        })
        .subscribe((classrooms) => {
          this.classrooms = classrooms;
        })
    );
  }

  showSchedulesClash(): void {
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Choque de horarios',
          body: this.clashBody(),
        },
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe(() => {
      dialogRef.close();
    });
  }
}
