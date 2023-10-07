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

import {
  AlignmentType,
  BorderStyle,
  Document,
  Footer,
  Header,
  ImageRun,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableAnchorType,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import { saveAs } from 'file-saver';
import moment from 'moment';
import { Subscription } from 'rxjs';

import { StateService } from '../../../common/state';
import { UserStateService } from '../../../common/user-state';
import { ClassroomVM } from '../../classrooms';
import { DepartmentItemVM } from '../../departments';
import { PeriodVM } from '../../periods';
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
  teacherId!: number;
  allTeachers: boolean = false;
  departmentId!: number;
  form!: FormGroup;
  periodActive!: PeriodVM;

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
            this.periodActive = period;
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
            periodId: this.periodActive.id,
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

  async createCharge(): Promise<void> {
    moment.locale('es');
    const nameTeacher = 'Test Teacher'.toUpperCase();
    const nameSemester = this.periodActive.name;
    const totalHours = 0;
    const img = await this.schedulesService.getFile('assets/circle-logo-udo.png');
    const doc = new Document({
      sections: [
        {
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  children: [
                    new ImageRun({
                      data: (await img?.arrayBuffer() as any),
                      transformation: {
                        width: 98,
                        height: 98,
                      },
                      floating: {
                        behindDocument: false,
                        horizontalPosition: {
                          offset: 850000,
                        },
                        verticalPosition: {
                          offset: 200000,
                        },
                    },
                    }),
                  ],
                }),
                new Table({
                  layout: TableLayoutType.FIXED,
                  float: {
                    absoluteHorizontalPosition: '0cm',
                    absoluteVerticalPosition: '0.6cm',
                    horizontalAnchor: TableAnchorType.PAGE,
                    verticalAnchor: TableAnchorType.PAGE,

                  },
                  indent: {
                    size: 0,
                    type: WidthType.PERCENTAGE,
                  },
                  margins: {
                    bottom: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    marginUnitType: WidthType.PERCENTAGE,
                  },
                  width: {
                    size: '21cm',
                    type: WidthType.DXA,
                  },
                  rows: [
                    new TableRow({
                      children: [
                        new TableCell({
                          width: {
                            size: 100,
                            type: WidthType.PERCENTAGE,
                          },
                          borders: {
                            bottom: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: '0066FF',
                            },
                            left: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: '0066FF',
                            },
                            right: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: '0066FF',
                            },
                            top: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: '0066FF',
                            }
                          },
                          shading: {
                            fill: '0066FF',
                            type: ShadingType.CLEAR,
                            color: '0066FF',
                          },
                          margins: {
                            marginUnitType: WidthType.DXA,
                            bottom: 1,
                            left: 6,
                            right: 6,
                            top: 1,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '',
                                  size: '12pt',
                                  color: 'FFFFFF',
                                }),
                              ],
                            }),
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '                                                UNIVERSIDAD DE ORIENTE',
                                  bold: true,
                                  size: '12pt',
                                  color: 'FFFFFF',
                                }),
                              ],
                            }),
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '                                                          NÚCLEO DE MONAGAS',
                                  bold: true,
                                  size: '10pt',
                                  color: 'FFFFFF',
                                }),
                              ],
                            }),
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '',
                                  size: '12pt',
                                  color: 'FFFFFF',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],

                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          borders: {
                            bottom: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: 'FFFFFF',
                            },
                            left: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: 'FFFFFF',
                            },
                            right: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: 'FFFFFF',
                            },
                            top: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: 'FFFFFF',
                            }
                          },
                          shading: {
                            fill: 'FFFFFF',
                            type: ShadingType.CLEAR,
                            color: 'FFFFFF',
                          },
                          width: {
                            size: 100,
                            type: WidthType.PERCENTAGE,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '',
                                  size: '12pt',
                                  color: 'FFFFFF',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          borders: {
                            bottom: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: '0066FF',
                            },
                            left: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: '0066FF',
                            },
                            right: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: '0066FF',
                            },
                            top: {
                              style: BorderStyle.NONE,
                              size: 0,
                              color: '0066FF',
                            }
                          },
                          shading: {
                            fill: '0066FF',
                            type: ShadingType.CLEAR,
                            color: '0066FF',
                          },
                          width: {
                            size: 100,
                            type: WidthType.PERCENTAGE,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '',
                                  size: '8pt',
                                  color: 'FFFFFF',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'DEL PUEBLO VENIMOS /  HACIA EL PUEBLO VAMOS',
                      bold: true,
                      size: '10pt',
                    }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: '',
                      size: '9pt',
                    }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'Av. Universidad. Campus Los Guaritos. Maturín Estado Monagas. Apartado Postal Nº 6201.',
                      size: '9pt',
                    }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: 'Teléfono 0291-3004010. htpp://www.monagas.udo.edu.ve/',
                      size: '9pt',
                    }),
                  ],
                }),
              ],

            }),
          },
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: 'DIRECCIÓN ESCUELA DE INGENIERÍA Y CIENCIAS APLICADAS',
                  bold: true,
                  size: '12pt',
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'DEPARTAMENTO DE INGENIERÍA DE SISTEMAS',
                  bold: true,
                  size: '12pt',
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Maturín, ' + moment().format('DD MMMM') + ' de ' + moment().format('YYYY'),
                  size: '12pt',
                }),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'DIS-0XX/' + moment().format('YYYY'),
                  size: '12pt',
                  shading: {
                    type: ShadingType.CLEAR,
                    fill: 'FFFF00',
                  }
                }),
              ],
              alignment: AlignmentType.RIGHT,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Ciudadano(a)',
                  size: '12pt',
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'PROF. ' + nameTeacher,
                  size: '12pt',
                  bold: true,
                }),
              ],
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Presente',
                  size: '12pt',
                }),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: 'Estimado Profesor:',
                  size: '12pt',
                }),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Es grato dirigirme a usted, en la oportunidad de saludarle y hacerle entrega de su Carga Académica para el semestre ${nameSemester}; que se detalla a continuación:`,
                  size: '12pt',
                }),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Total de Horas académicas: ${totalHours}`,
                  size: '12pt',
                  bold: true,
                }),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: `En tal sentido, le auguro un semestre de éxitos profesionales y de buenos rendimientos para los estudiantes que cursan las(s) asignatura(s) que usted dictará en la Carrera de Ingeniería de Sistemas y en pro de enaltecer a nuestra Casa más Alta.`,
                  size: '12pt',
                }),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Sin otro particular, reiterándole mi aprecio y consideración.`,
                  size: '12pt',
                }),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Le saluda`,
                  size: '12pt',
                }),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Atentamente,`,
                  size: '12pt',
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({}),
            new Paragraph({}),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Prof. MSc. Roger Díaz`,
                  size: '12pt',
                  bold: true,
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `Jefe de Departamento`,
                  size: '12pt',
                }),
              ],
              alignment: AlignmentType.CENTER,
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: `C.c. Expediente, Archivo / EICA`,
                  size: '8pt',
                }),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  }
}