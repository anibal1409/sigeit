import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  TrackByFunction,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import {
  ConfirmModalComponent,
  SEMESTERS,
  SemesterVM,
  UserStateService,
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
import {
  SavedSchedule,
  StageInscription,
} from './model';
import { StudentSchedulesService } from './student-schedules.service';

@Component({
  selector: 'app-student-schedules',
  templateUrl: './student-schedules.component.html',
  styleUrls: ['./student-schedules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
  loading = true;


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
  careerIdUser!: number;
  disabledSubmit = true;
  isInscription = false;
  lastSection!: SectionItemVM | null;
  nameCtrl = new FormControl();
  savedSchedules: Array<SavedSchedule> = [];
  savedScheduleEdit!: SavedSchedule;

  // Nuevas propiedades para optimización
  usedDays: Array<DayVM> = [];
  usedTimeSlots: Array<{start: string, end: string, index: number}> = [];
  optimizedDataSource: any[] = [];
  optimizedDisplayedColumns: string[] = ['hora'];

  // Propiedades para unificación de bloques
  unifiedScheduleData: any[] = [];
  scheduleBlocks: Map<string, any[]> = new Map();

  // Propiedades para detección de conflictos
  scheduleConflicts: Map<string, any[]> = new Map();
  hasConflicts = false;

  private sub$ = new Subscription();

  constructor(
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private stateService: StateService,
    private studentSchedulesService: StudentSchedulesService,
    private userStateService: UserStateService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.loading = true;
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.isInscription = this.router.url.includes('inscription');
    this.careerIdUser = this.userStateService.getCareerId() || 0;
    this.carrerId = this.careerIdUser;
    this.createForm();
    this.sub$.add(
      this.studentSchedulesService.getLoading$().subscribe((loading) => {
        this.loading = loading;
        this.stateService.setLoading(loading);
        this.cdr.markForCheck();
      })
    );

    this.loadActivePeriod();
  }

  private validateInscription(): void {
    const userId = this.userStateService.getUserId() || 0;
    const periodId = this.period?.id;
    if (periodId && userId && this.isInscription) {
      this.sub$.add(
        this.studentSchedulesService.getInscriptions$({
          userId,
          periodId,
          schedules: true,
        }).subscribe(
          (inscriptions) => {
            if (inscriptions.length) {
              if (inscriptions[0].stage === StageInscription.Registered) {
                this.goToFinished();
              } else if (inscriptions[0].stage === StageInscription.Validated) {
                inscriptions.forEach(
                  (inscription) => {
                    const key = inscription.section?.subject?.id as number;
                    const section: SectionItemVM = {
                      ...inscription.section,
                      validateId: inscription.id,
                    } as SectionItemVM;
                    this.subjectsSelected.set(key, section);
                  }
                );
                this.sectionsSelected = [...this.subjectsSelected.values()];
                this.loadSchedules();
                this.cdr.markForCheck();
              }
            }
          }
        )
      );
    }
  }

  private goToFinished(): void {
    this.router.navigate(['/dashboard/inscription/finished']);
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
            this.validateInscription();
            this.cdr.markForCheck();
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
            this.cdr.markForCheck();
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
          if (this.carrerId) {
            this.loadSubjects();
          }
          this.cdr.markForCheck();
        }
      )
    );
  }

  private loadSubjects(): void {
    if (this.carrerId) {
      this.sub$.add(
        this.studentSchedulesService.getSubjects$({
          carrerId: this.carrerId,
          semester: this.semesterId > 0 ? this.semesterId : undefined,
          status: true,
        }).subscribe(
          (subjects) => {
            this.subjects = subjects;
            this.cdr.markForCheck();
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
          status: true,
        }).subscribe(
          (sections) => {
            console.log(sections);
            this.sections = sections;
            this.cdr.markForCheck();
          }
        )
      );
    }
  }

  private createForm(): void {
    this.form = this.fb.group({
      careerId: [this.careerIdUser, [Validators.required]],
      subjectId: [null, [Validators.required]],
      semesterId: [-1, [Validators.required]],
    });

    this.sub$.add(
      this.form.get('careerId')?.valueChanges.subscribe((carrerId) => {
        this.carrerId = +carrerId;
        this.semesterId = 0;
        this.subjectId = 0;
        this.sectionId = 0;
        this.savedSchedules = [];

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
          this.loadSavedSchedules();
        }
      })
    );

    this.sub$.add(
      this.form.get('semesterId')?.valueChanges.subscribe((semesterId) => {
        this.semesterId = +semesterId;
        this.sections = [];
        this.form.patchValue({
          subjectId: null,
          sectionId: null,
        });
        if (semesterId) {
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
    // Si hay schedules, obtener todos los horarios de la misma sección
    if (schedules && schedules.length > 0) {
      const firstSchedule = schedules[0];
      const sectionId = firstSchedule.section?.id;
      const subjectId = firstSchedule.section?.subject?.id;

      // Buscar todos los horarios de esta sección en todos los días
      const allSectionSchedules: ScheduleItemVM[] = [];

      this.sectionsSelected.forEach(section => {
        if (section.id === sectionId && section.subject?.id === subjectId) {
          section.schedules?.forEach(schedule => {
            allSectionSchedules.push(schedule);
          });
        }
      });

      console.log('All schedules for section:', allSectionSchedules);
      console.log('Number of schedules for section:', allSectionSchedules.length);

      const dialogRef = this.matDialog.open(ScheduleDetailsComponent, {
        data: {
          schedules: allSectionSchedules,
        },
      });

      dialogRef.componentInstance.closed.subscribe((res) => {
        dialogRef.close();
      });
    }
  }

  addSection(section: SectionItemVM): void {
    this.lastSection = section;
    const key = section.subject?.id as any;

    if (!this.subjectsSelected.has(key)) {
      this.subjectsSelected.set(key, section);
    } else {
      const sectionS = this.subjectsSelected.get(key);
      if (sectionS?.id === section.id) {
        this.subjectsSelected.delete(key);
        this.lastSection = null;
        if (sectionS?.validateId) {
          this.deleteInscription(sectionS, true);
        }
      } else {
        this.subjectsSelected.set(key, section);
      }
    }

    this.sectionsSelected = [...this.subjectsSelected.values()];
    this.loadSchedules();
    this.cdr.markForCheck();
  }

  private clearSchedule(): void {
    this.dataSchedule = this.startIntervals.map(() =>
      this.days.map(() => {
        return { text: '', schedules: [] };
      })
    );
    this.dataSource = [];
    this.optimizedDataSource = [];
    this.usedDays = [];
    this.usedTimeSlots = [];
  }

  private loadSchedules(): void {
    this.credits = this.sectionsSelected.reduce((acc, section) => acc + (section?.subject?.credits || 0), 0);
    this.subjectCounter = this.sectionsSelected.length;
    this.clearSchedule();
    const schedules = this.sectionsSelected.flatMap(
      (section) => section.schedules
    );
    this.clearCollapseSections();


    // Primero, procesar todos los horarios para identificar días y horarios utilizados
    const usedDaysSet = new Set<number>();
    const usedTimeSlotsSet = new Set<number>();

    schedules.forEach((schedule) => {
      if (!schedule) {
        return;
      }
      const dayIndex = this.days.findIndex(
        (day) => day.id === schedule.day?.id
      );
      const startIndex = this.startIntervals.indexOf(schedule.start);
      const endIndex = this.endIntervals.indexOf(schedule.end);


      if (dayIndex >= 0) {
        usedDaysSet.add(dayIndex);
      }

      // Si no encontramos los índices exactos, buscar el rango más cercano
      if (startIndex === -1 || endIndex === -1) {
        return;
      }

      // Agregar todos los time slots utilizados por este horario
      for (let i = startIndex; i <= endIndex; i++) {
        if (i >= 0) {
          usedTimeSlotsSet.add(i);
        }
      }

      // Solo colocar el schedule en la celda de inicio, no en todas las celdas del rango
      // Esto evita la duplicación y permite que el CSS maneje la extensión visual
      if (startIndex >= 0 && dayIndex >= 0) {
        // Verificar si el schedule ya existe en este slot para evitar duplicados
        const existingSchedule = this.dataSchedule[startIndex][dayIndex].schedules.find(
          (existing: any) => existing.id === schedule.id
        );

        if (!existingSchedule) {
          this.dataSchedule[startIndex][dayIndex].schedules.push(schedule);
        }

        // Calcular la duración en número de intervalos para el CSS
        const durationInSlots = endIndex - startIndex + 1;

        if (this.dataSchedule[startIndex][dayIndex]?.text) {
          this.dataSchedule[startIndex][dayIndex].text = 'Varias';
          this.collapseSections(this.dataSchedule[startIndex][dayIndex].schedules);
        } else {
          this.dataSchedule[startIndex][dayIndex].text = `${schedule.section?.name} - ${schedule.section?.subject?.name}`;
          this.dataSchedule[startIndex][dayIndex].duration = durationInSlots;
          this.dataSchedule[startIndex][dayIndex].scheduleInfo = {
            start: schedule.start,
            end: schedule.end,
            duration: durationInSlots
          };
        }
      }
    });

    // Crear arrays optimizados con solo los días y horarios utilizados
    this.usedDays = Array.from(usedDaysSet)
      .sort((a, b) => a - b)
      .map(index => this.days[index]);

    this.usedTimeSlots = Array.from(usedTimeSlotsSet)
      .sort((a, b) => a - b)
      .map(index => ({
        start: this.startIntervals[index],
        end: this.endIntervals[index],
        index: index
      }));

    // Actualizar columnas mostradas
    this.optimizedDisplayedColumns = ['hora', ...this.usedDays.map(day => day.name)];

    // Establecer las variables CSS después del renderizado
    setTimeout(() => {
      this.setDayCount();
      this.setTimeSlotsCount();
    }, 0);

    // Crear dataSource optimizado
    this.optimizedDataSource = this.usedTimeSlots.map(
      (timeSlot) => {
        const row: any = {
          hora: timeSlot.start,
          originalIndex: timeSlot.index
        };
        this.usedDays.forEach((day, dayIndex) => {
          const originalDayIndex = this.days.findIndex(d => d.id === day.id);
          row[day.name] = this.dataSchedule[timeSlot.index][originalDayIndex];
        });
        return row;
      }
    );

    // Mantener dataSource original para compatibilidad
    this.dataSource = this.startIntervals.map(
      (hora, index) => {
        const row: any = { hora };
        this.days.forEach((day, dayIndex) => {
          row[day.name] = this.dataSchedule[index][dayIndex];
        });
        return row;
      }
    );

    // Detectar conflictos de horarios
    this.detectScheduleConflicts();

    // Unificar bloques consecutivos
    this.unifyConsecutiveBlocks();


    this.validateLastSection();
    this.validateSubmit();
    this.cdr.markForCheck();
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
    this.validateSubmit();
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
    this.validateSubmit();
  }

  private validateLastSection(): void {
    const section = this.subjectsSelected.get(this.lastSection?.subject?.id as number);
    if (section && !section.collapse?.length && !section.validateId) {
      this.createInscription(section);
    }
  }

  createInscription(section: SectionItemVM): void {
    if (!this.isInscription) {
      return;
    }
    this.sub$.add(
      this.studentSchedulesService.createInscription$({
        stage: StageInscription.Validated,
        sectionId: section.id as number,
        userId: this.userStateService.getUserId() as number,
      }).subscribe(
        (inscription) => {
          section.validateId = inscription.id;
          const key = section.subject?.id as number;
          this.subjectsSelected.set(key, section);
          this.sectionsSelected = [...this.subjectsSelected.values()];
          this.validateSubmit();
        }
      )
    );
  }

  deleteInscription(section: SectionItemVM, clear = false): void {
    if (!this.isInscription) {
      return;
    }
    this.sub$.add(
      this.studentSchedulesService.deleteInscription$(section.validateId as number).subscribe(
        (inscription) => {
          if (!clear) {
            const key = section.subject?.id as number;
            section.validateId = undefined;
            this.subjectsSelected.set(key, section);
            this.sectionsSelected = [...this.subjectsSelected.values()];
            this.validateSubmit();
          }
        }
      )
    );
  }

  private validateSubmit(): void {
    if (!this.isInscription) {
      return;
    }
    const subjectValidate = this.sectionsSelected.filter((section) => !!section.validateId)?.length;
    const collapse = this.sectionsSelected.filter((section) => !!section.collapse?.length)?.length;
    this.disabledSubmit = this.credits > 18 || subjectValidate !== this.subjectCounter || subjectValidate === 0 || collapse > 0;
  }

  closeInscription(): void {
    if (!this.isInscription) {
      return;
    }
    if (!this.loading && !this.disabledSubmit) {
      const inscriptions = this.sectionsSelected.filter((section) => !!section.validateId).flatMap(
        (section) => section.validateId
      );
      this.sub$.add(
        this.studentSchedulesService.closeInscription$(inscriptions as any).subscribe(
          (inscription) => {
            this.goToFinished();
          }
        )
      );
    }
  }

  confirmClose(): void {
    if (!this.isInscription) {
      return;
    }
    const dialogRef = this.matDialog.open(ConfirmModalComponent, {
      data: {
        message: {
          title: 'Cerrar inscripción',
          body: `¿Está seguro que desea cerrar su proceso de inscripción? Esta acción no puede deshacerse`,
        },
      },
      hasBackdrop: true,
    });

    dialogRef.componentInstance.closed.subscribe((res) => {
      dialogRef.close();
      if (res) {
        this.closeInscription()
      }
    });
  }

  saveShedule(): void {
    if (!this.isInscription) {
      if (this.studentSchedulesService.saveSchedule(
        this.nameCtrl.value,
        this.sectionsSelected,
        this.carrerId,
        this.userStateService.getUserId(),
        this.savedScheduleEdit?.id,
        )) {
          this.nameCtrl.reset();
          this.subjectsSelected.clear();
          this.sectionsSelected = [];
          this.loadSavedSchedules();
      }
    }
  }

  private loadSavedSchedules(): void {
    if (!this.isInscription) {
      this.savedSchedules = this.studentSchedulesService.getSavedSchedules(this.carrerId, this.userStateService.getUserId());
    }
  }

  loadSavedSchedule(schedule: SavedSchedule): void {
    if (!this.isInscription) {
      this.subjectCounter = 0;
      this.credits = 0;
      this.subjectsSelected.clear();
      this.sectionsSelected = [];
      this.savedScheduleEdit = schedule;
      this.nameCtrl.patchValue(schedule.name);
      schedule.sections.forEach(
        (section) => {
          this.addSection(section);
        }
      );
    }
  }

  removeSavedSchedule(schedule: SavedSchedule): void {
    this.studentSchedulesService.removeSavedSchedule(this.carrerId, this.userStateService.getUserId(), schedule.id);
    this.loadSavedSchedules();
  }

  // Método para borrar todas las asignaturas seleccionadas
  clearAllSelectedSubjects(): void {
    // Limpiar todas las asignaturas seleccionadas
    this.subjectsSelected.clear();
    this.sectionsSelected = [];

    // Limpiar el formulario si es necesario
    this.form.patchValue({
      subjectId: null,
      sectionId: null,
    });

    // Limpiar el horario
    this.clearSchedule();

    // Resetear contadores
    this.credits = 0;
    this.subjectCounter = 0;
    this.hasConflicts = false;

    // Actualizar la vista
    this.cdr.markForCheck();
  }

  // Funciones trackBy para optimizar el rendimiento
  trackBySection: TrackByFunction<SectionItemVM> = (index: number, section: SectionItemVM) => section.id;

  trackByDay: TrackByFunction<DayVM> = (index: number, day: DayVM) => day.id;

  trackByTimeSlot: TrackByFunction<any> = (index: number, timeSlot: any) => timeSlot.originalIndex || index;

  trackBySavedSchedule: TrackByFunction<SavedSchedule> = (index: number, schedule: SavedSchedule) => schedule.id;

  trackByCareer: TrackByFunction<CareerVM> = (index: number, career: CareerVM) => career.id;

  trackBySubject: TrackByFunction<SubjectVM> = (index: number, subject: SubjectVM) => subject.id;

  trackBySemester: TrackByFunction<SemesterVM> = (index: number, semester: SemesterVM) => semester.id;

  // Método para establecer el número de días en el CSS
  private setDayCount(): void {
    const scheduleGrid = document.querySelector('.schedule-grid');
    if (scheduleGrid) {
      (scheduleGrid as HTMLElement).style.setProperty('--day-count', this.usedDays.length.toString());
    }
  }

  // Método para establecer el número de slots de tiempo en el CSS
  private setTimeSlotsCount(): void {
    const scheduleGrid = document.querySelector('.schedule-grid');
    if (scheduleGrid) {
      (scheduleGrid as HTMLElement).style.setProperty('--time-slots-count', this.usedTimeSlots.length.toString());
    }
  }

  // Método para verificar si es el primer slot de tiempo de un horario
  isFirstTimeSlotOfSchedule(row: any, dayName: string, currentIndex: number): boolean {
    if (!row[dayName]) {
      return false;
    }

    // Si no tiene duración, mostrar siempre
    if (!row[dayName].duration || row[dayName].duration === 1) {
      return true;
    }

    // Verificar si es el primer slot de este horario
    // Buscar hacia atrás para ver si hay otro slot con el mismo horario
    for (let i = currentIndex - 1; i >= 0; i--) {
      const previousRow = this.unifiedScheduleData[i];
      if (previousRow && previousRow[dayName] &&
          previousRow[dayName].schedules && row[dayName].schedules &&
          previousRow[dayName].schedules.length > 0 && row[dayName].schedules.length > 0) {

        // Comparar si es el mismo horario (mismo ID de schedule)
        const currentScheduleId = row[dayName].schedules[0].id;
        const previousScheduleId = previousRow[dayName].schedules[0].id;

        if (currentScheduleId === previousScheduleId) {
          return false; // No es el primer slot
        }
      }
    }

    return true; // Es el primer slot
  }

  // Método para obtener la hora de fin de un slot de tiempo
  getEndTimeForSlot(row: any): string {
    const startIndex = this.startIntervals.indexOf(row.hora);
    if (startIndex >= 0 && startIndex < this.endIntervals.length) {
      return this.endIntervals[startIndex];
    }
    return '';
  }

  // Método para obtener la hora de fin de un bloque unificado
  getEndTime(row: any): string {
    if (!row.isUnified) return '';

    // Buscar el primer día que tenga datos para obtener la hora de fin
    for (const day of this.usedDays) {
      if (row[day.name]?.timeRange?.end) {
        return row[day.name].timeRange.end;
      }
    }
    return '';
  }

  // Método para detectar conflictos de horarios
  private detectScheduleConflicts(): void {
    this.scheduleConflicts.clear();
    this.hasConflicts = false;

    // Solo detectar conflictos si hay más de una asignatura seleccionada
    if (this.sectionsSelected.length < 2) {
      return;
    }

    // Detectar conflictos en los horarios originales antes de la unificación
    this.usedDays.forEach(day => {
      const dayConflicts: any[] = [];
      const daySchedules: any[] = [];

      // Recopilar todos los horarios del día desde el dataSchedule original
      this.startIntervals.forEach((startTime, index) => {
        const originalDayIndex = this.days.findIndex(d => d.id === day.id);
        const scheduleData = this.dataSchedule[index][originalDayIndex];

        if (scheduleData?.text && scheduleData.text !== 'Varias' && scheduleData.schedules?.length > 0) {
          // Agregar cada horario individual con información de la sección
          scheduleData.schedules.forEach((schedule: any) => {
            // Verificar que no se haya agregado ya este horario específico
            const alreadyExists = daySchedules.some(existing =>
              existing.sectionId === schedule.section?.id &&
              existing.subjectId === schedule.section?.subject?.id &&
              existing.timeSlot.start === schedule.start &&
              existing.timeSlot.end === schedule.end
            );

            if (!alreadyExists) {
              const scheduleInfo = {
                ...scheduleData,
                schedule: schedule,
                timeSlot: {
                  start: schedule.start,
                  end: schedule.end,
                  index: index
                },
                day: day,
                originalIndex: index,
                sectionId: schedule.section?.id,
                subjectId: schedule.section?.subject?.id
              };
              daySchedules.push(scheduleInfo);
            }
          });
        }
      });

      // Ordenar por tiempo de inicio
      daySchedules.sort((a, b) => this.timeToMinutes(a.timeSlot.start) - this.timeToMinutes(b.timeSlot.start));


      // Detectar conflictos solo entre asignaturas/secciones diferentes
      for (let i = 0; i < daySchedules.length; i++) {
        for (let j = i + 1; j < daySchedules.length; j++) {
          const schedule1 = daySchedules[i];
          const schedule2 = daySchedules[j];

          // Verificar que sean asignaturas/secciones diferentes
          const isDifferentSubject = schedule1.subjectId !== schedule2.subjectId;
          const isDifferentSection = schedule1.sectionId !== schedule2.sectionId;

          // Solo considerar conflicto si son asignaturas/secciones diferentes Y hay solapamiento
          if ((isDifferentSubject || isDifferentSection) && this.schedulesOverlap(schedule1, schedule2)) {
            const conflict = {
              timeSlot: schedule1.timeSlot,
              conflictingSchedules: [schedule1, schedule2],
              conflictType: 'time_overlap'
            };
            dayConflicts.push(conflict);
            this.hasConflicts = true;
          }
        }
      }

      if (dayConflicts.length > 0) {
        this.scheduleConflicts.set(day.name, dayConflicts);
      }
    });

    // Actualizar las secciones con información de conflictos
    this.updateSectionsWithConflicts();
  }

  // Método para actualizar las secciones con información de conflictos
  private updateSectionsWithConflicts(): void {

    // Limpiar conflictos previos
    this.sectionsSelected.forEach(section => {
      section.collapse = [];
    });

    // Procesar cada conflicto y actualizar las secciones afectadas
    this.scheduleConflicts.forEach((dayConflicts, dayName) => {
      dayConflicts.forEach(conflict => {
        conflict.conflictingSchedules.forEach((conflictingSchedule: any) => {
          const sectionId = conflictingSchedule.sectionId;
          const section = this.sectionsSelected.find(s => s.id === sectionId);

          if (section) {
            // Agregar información del conflicto
            const conflictInfo = {
              ...conflictingSchedule,
              conflictType: conflict.conflictType,
              conflictingWith: conflict.conflictingSchedules
                .filter((cs: any) => cs.sectionId !== sectionId)
                .map((cs: any) => ({
                  subjectCode: cs.schedule?.section?.subject?.code,
                  subjectName: cs.schedule?.section?.subject?.name,
                  sectionName: cs.schedule?.section?.name,
                  timeSlot: cs.timeSlot
                }))
            };

            if (!section.collapse) {
              section.collapse = [];
            }
            section.collapse.push(conflictInfo);
          }
        });
      });
    });

    // Actualizar subjectsSelected con las secciones modificadas
    this.subjectsSelected.clear();
    this.sectionsSelected.forEach(section => {
      const key = section.subject?.id as number;
      this.subjectsSelected.set(key, section);
    });
  }

  // Método para verificar si dos horarios se solapan
  private schedulesOverlap(schedule1: any, schedule2: any): boolean {
    const start1 = this.timeToMinutes(schedule1.timeSlot.start);
    const end1 = this.timeToMinutes(schedule1.timeSlot.end);
    const start2 = this.timeToMinutes(schedule2.timeSlot.start);
    const end2 = this.timeToMinutes(schedule2.timeSlot.end);

    // Verificar solapamiento: dos horarios se solapan si uno empieza antes de que termine el otro
    return start1 < end2 && start2 < end1;
  }

  // Método para convertir tiempo a minutos
  private timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  // Método para verificar si un horario tiene conflictos
  hasScheduleConflict(day: string, timeSlot: any): boolean {
    if (!timeSlot) return false;

    const dayConflicts = this.scheduleConflicts.get(day) || [];

    // Verificar si el timeSlot coincide con algún conflicto
    return dayConflicts.some(conflict => {
      const conflictStart = this.timeToMinutes(conflict.timeSlot.start);
      const conflictEnd = this.timeToMinutes(conflict.timeSlot.end);
      const slotStart = this.timeToMinutes(timeSlot.start);
      const slotEnd = this.timeToMinutes(timeSlot.end);

      // Verificar si hay solapamiento
      return (slotStart < conflictEnd && slotEnd > conflictStart);
    });
  }

  // Método para obtener los conflictos de un horario específico
  getScheduleConflicts(day: string, timeSlot: any): any[] {
    const dayConflicts = this.scheduleConflicts.get(day) || [];
    return dayConflicts.filter(conflict =>
      conflict.timeSlot.start === timeSlot.start &&
      conflict.timeSlot.end === timeSlot.end
    );
  }

  // Método para unificar bloques consecutivos de la misma asignatura
  private unifyConsecutiveBlocks(): void {
    this.scheduleBlocks.clear();
    this.unifiedScheduleData = [];


    // Agrupar horarios por día y asignatura
    this.usedDays.forEach(day => {
      const daySchedules: any[] = [];
      const originalDayIndex = this.days.findIndex(d => d.id === day.id);

      // Recorrer todos los slots de tiempo para encontrar horarios
      this.startIntervals.forEach((startTime, index) => {
        const scheduleData = this.dataSchedule[index][originalDayIndex];


        if (scheduleData?.text && scheduleData.text !== 'Varias' && scheduleData.schedules?.length > 0) {
          daySchedules.push({
            ...scheduleData,
            timeSlot: {
              start: startTime,
              end: this.endIntervals[index],
              index: index
            },
            day: day,
            originalIndex: index
          });
        }
      });

      // Ordenar por índice de tiempo
      daySchedules.sort((a, b) => a.originalIndex - b.originalIndex);


      // Unificar bloques consecutivos
      let currentBlock: any[] = [];
      let lastSubject = '';

      daySchedules.forEach((schedule, index) => {
        const subjectKey = `${schedule.schedules[0]?.section?.subject?.id}-${schedule.schedules[0]?.section?.id}`;

        if (subjectKey === lastSubject && currentBlock.length > 0) {
          // Es la misma asignatura, agregar al bloque actual
          currentBlock.push(schedule);
        } else {
          // Nueva asignatura o primera vez
          if (currentBlock.length > 0) {
            // Guardar bloque anterior
            this.saveScheduleBlock(currentBlock, day);
          }
          currentBlock = [schedule];
          lastSubject = subjectKey;
        }
      });

      // Guardar último bloque
      if (currentBlock.length > 0) {
        this.saveScheduleBlock(currentBlock, day);
      }
    });

    // Crear dataSource unificado
    this.createUnifiedDataSource();
  }

  private getUniqueSchedules(schedules: any[]): any[] {
    const uniqueSchedules = new Map();
    schedules.forEach(schedule => {
      if (schedule.id) {
        uniqueSchedules.set(schedule.id, schedule);
      }
    });
    return Array.from(uniqueSchedules.values());
  }

  private saveScheduleBlock(block: any[], day: DayVM): void {
    if (block.length === 0) return;

    const firstSchedule = block[0];
    const lastSchedule = block[block.length - 1];
    const subjectKey = `${firstSchedule.schedules[0]?.section?.subject?.id}-${firstSchedule.schedules[0]?.section?.id}`;

    const unifiedBlock = {
      ...firstSchedule,
      timeRange: {
        start: firstSchedule.timeSlot.start,
        end: firstSchedule.scheduleInfo?.end || lastSchedule.timeSlot.end,
        duration: block.length
      },
      isUnified: block.length > 1,
      blockSize: block.length,
      allSchedules: this.getUniqueSchedules(block.flatMap(s => s.schedules))
    };

    const dayKey = day.name;
    if (!this.scheduleBlocks.has(dayKey)) {
      this.scheduleBlocks.set(dayKey, []);
    }
    this.scheduleBlocks.get(dayKey)!.push(unifiedBlock);
  }

  private createUnifiedDataSource(): void {
    // Obtener todos los slots de tiempo individuales que se necesitan mostrar
    const allTimeSlots = new Set<string>();


    this.scheduleBlocks.forEach(blocks => {
      blocks.forEach(block => {
        // Para cada bloque, agregar todos los slots de tiempo desde inicio hasta fin
        const startIndex = this.startIntervals.indexOf(block.timeRange.start);
        const endIndex = this.endIntervals.indexOf(block.timeRange.end);

        if (startIndex >= 0 && endIndex >= 0) {
          for (let i = startIndex; i <= endIndex; i++) {
            if (i < this.startIntervals.length) {
              allTimeSlots.add(this.startIntervals[i]);
            }
          }
        }
      });
    });

    // Convertir a array y ordenar
    const sortedTimeSlots = Array.from(allTimeSlots)
      .sort((a, b) => a.localeCompare(b));


    // Crear dataSource con todos los slots de tiempo necesarios
    this.unifiedScheduleData = sortedTimeSlots.map(timeSlot => {
      const row: any = {
        hora: timeSlot,
        isUnified: false
      };

      this.usedDays.forEach(day => {
        const dayBlocks = this.scheduleBlocks.get(day.name) || [];

        // Buscar el bloque que contiene este slot de tiempo
        const matchingBlock = dayBlocks.find(block => {
          const startIndex = this.startIntervals.indexOf(block.timeRange.start);
          const endIndex = this.endIntervals.indexOf(block.timeRange.end);
          const currentIndex = this.startIntervals.indexOf(timeSlot);

          return currentIndex >= startIndex && currentIndex <= endIndex;
        });

        if (matchingBlock) {
          // Solo mostrar el bloque en el primer slot de tiempo
          const startIndex = this.startIntervals.indexOf(matchingBlock.timeRange.start);
          const currentIndex = this.startIntervals.indexOf(timeSlot);

          if (currentIndex === startIndex) {
            row[day.name] = {
              ...matchingBlock,
              isUnified: matchingBlock.isUnified,
              timeRange: matchingBlock.timeRange
            };
            row.isUnified = true;
          } else {
            row[day.name] = null;
          }
        } else {
          row[day.name] = null;
        }
      });

      return row;
    });
  }
}
