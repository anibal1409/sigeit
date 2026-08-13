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
  VerticalAlign,
  WidthType,
} from 'docx';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import moment from 'moment';
import {
  firstValueFrom,
  Subscription,
} from 'rxjs';

import { StateService } from '../../../common/state';
import { UserStateService } from '../../../common/user-state';
import { DepartmentItemVM } from '../../departments';
import { PeriodVM } from '../../periods';
import { TeacherItemVM } from '../../teachers';
import {
  DayVM,
  ScheduleItemVM,
} from '../model';
import { SchedulesService } from '../schedules.service';
import { ScheduleDisplayService } from '../shared/schedule-display.service';
import {
  BulkAcademicChargeModalComponent,
  BulkAcademicChargeModalResult,
} from './bulk-academic-charge-modal.component';

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
  periodActive?: PeriodVM;
  departmentIdUser!: number;

  startIntervals: Array<string> = [];
  endIntervals: Array<string> = [];
  teachers: Array<TeacherItemVM> = [];
  departments: Array<DepartmentItemVM> = [];
  days: Array<DayVM> = [];
  dataSchedule: any[][] = [];
  dataSource: any[] = [];
  displayedColumns: string[] = ['hora'];

  private sub$ = new Subscription();
  loading = false;
  academicCharge: Array<ScheduleItemVM> = [];

  constructor(
    private schedulesService: SchedulesService,
    private scheduleDisplayService: ScheduleDisplayService,
    private fb: FormBuilder,
    private stateService: StateService,
    private userStateService: UserStateService,
    private dialog: MatDialog,
  ) { }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
    this.departmentIdUser = this.userStateService.getDepartmentId() || 0;
    this.departmentId = this.departmentIdUser;
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
        this.changeDepartmentId(departmentId);
      })
    );

    this.sub$.add(
      this.form.get('teacherId')?.valueChanges.subscribe((subjectId) => {
        this.teacherId = +subjectId;
        this.academicCharge = [];
        this.clearSchedule();

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
          this.displayedColumns = ['hora'];
          days.forEach((day) => {
            this.displayedColumns.push(day.name);
          });
        })
    );
  }

  private changeDepartmentId(departmentId: number): void {
    this.departmentId = +departmentId;
    this.teacherId = 0;
    this.teachers = [];
    this.academicCharge = [];
    this.clearSchedule();

    this.form.patchValue({
      teacherId: null,
    });

    if (departmentId) {
      this.loadTeachers();
    }
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
    this.dataSchedule = this.scheduleDisplayService.initializeScheduleMatrix(
      this.startIntervals,
      this.days
    );
    this.dataSource = [];
  }

  private loadSchedules(): void {
    const periodId = this.periodActive?.id;
    if (this.teacherId && periodId) {
      this.sub$.add(
        this.schedulesService
          .getSchedules$({
            teacherId: this.teacherId,
            periodId,
            departmentId: this.allTeachers ? undefined : this.departmentId,
            status: true,
          })
          .subscribe((schedules) => {
            this.academicCharge = schedules;
            this.clearSchedule();

            this.scheduleDisplayService.processSchedulesIntoMatrix(
              schedules,
              this.dataSchedule,
              this.startIntervals,
              this.endIntervals,
              this.days
            );

            this.dataSource = this.startIntervals.map(
              (hora, index) => {
                const row: any = { hora, hour: `${hora}/${this.endIntervals[index]}` };
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

  showScheduleDetails(schedules: Array<ScheduleItemVM>): void {
    this.scheduleDisplayService.showScheduleDetails(schedules);
  }

  private loadDepartments(): void {
    this.sub$.add(
      this.schedulesService
        .getDepartaments$({ schoolId: this.userStateService.getSchoolId() })
        .subscribe((departaments) => {
          this.departments = departaments;
          if (departaments.length && this.departmentIdUser) {
            this.changeDepartmentId(this.departmentIdUser);
          }
        })
    );
  }

  private loadTeachers(): void {
    this.sub$.add(
      this.schedulesService
        .getTeachers$({ departmentId: this.allTeachers ? undefined : +this.departmentId, status: true })
        .subscribe((teachers) => {
          this.teachers = teachers;
        })
    );
  }

  openBulkChargeModal(): void {
    if (!this.periodActive?.id) {
      return;
    }
    void firstValueFrom(
      this.schedulesService.getTeachers$({
        schoolId: this.userStateService.getSchoolId(),
        status: true,
      }),
    ).then((allActiveTeachers) => {
      if (!allActiveTeachers.length) {
        return;
      }
      const suggestedNext = +(sessionStorage.getItem('codeDepartment') || 248) + 1;
      this.dialog
        .open(BulkAcademicChargeModalComponent, {
          width: '40rem',
          maxWidth: '95vw',
          data: {
            teachers: allActiveTeachers.slice(),
            suggestedNextOfficeCode: suggestedNext,
          },
        })
        .afterClosed()
        .subscribe((result: BulkAcademicChargeModalResult | undefined) => {
          if (result?.selectedTeacherIds?.length) {
            void this.runBulkAcademicCharges(result, allActiveTeachers);
          }
        });
    });
  }

  private formatDisCode(codeDepartment: number, year: string): string {
    const n = Math.max(0, Math.floor(Number(codeDepartment)));
    return `DIS-${String(n).padStart(3, '0')}/${year}`;
  }

  private async runBulkAcademicCharges(
    result: BulkAcademicChargeModalResult,
    teacherList: TeacherItemVM[],
  ): Promise<void> {
    const period = this.periodActive;
    if (!period?.id) {
      return;
    }
    moment.locale('es');
    const letterMoment = moment(result.letterDate, 'YYYY-MM-DD', true);
    if (!letterMoment.isValid()) {
      return;
    }
    const year = letterMoment.format('YYYY');
    const nameSemester = period.name;
    const img = await this.schedulesService.getFile('assets/circle-logo-udo.png');
    const logoBuffer = (await img?.arrayBuffer()) as ArrayBuffer;
    let officeNum = result.officeCodeStart;
    const downloadMode = result.downloadMode ?? 'separate';
    const zipEntries: { name: string; blob: Blob }[] = [];

    for (const teacherId of result.selectedTeacherIds) {
      const schedules = await firstValueFrom(
        this.schedulesService.getSchedules$({
          teacherId,
          periodId: period.id,
          departmentId: undefined,
          status: true,
        }),
      );
      const nameTeacher = teacherList
        .find((t) => t.id === teacherId)
        ?.fullName?.toUpperCase() || '';
      const code = this.formatDisCode(officeNum, year);
      const doc = this.buildAcademicChargeDocument(
        logoBuffer,
        schedules,
        nameTeacher,
        code,
        letterMoment,
        nameSemester,
      );
      const blob = await Packer.toBlob(doc);
      const fileName = this.buildAcademicChargeFileName(code, nameTeacher, nameSemester);
      if (downloadMode === 'zip') {
        zipEntries.push({ name: fileName, blob });
      } else {
        saveAs(blob, fileName);
      }
      officeNum += 1;
    }

    if (downloadMode === 'zip' && zipEntries.length) {
      const zip = new JSZip();
      const zipBase = `cargas-academicas-${nameSemester.replace(/\s+/g, '-')}-${letterMoment.format('YYYY-MM-DD')}`;
      const zipInnerFolder =
        this.sanitizePathSegment(zipBase) || 'cargas-academicas';
      const folder = zip.folder(zipInnerFolder);
      const target = folder ?? zip;
      zipEntries.forEach((entry) => {
        target.file(entry.name, entry.blob);
      });
      const zipBlob = await zip.generateAsync({
        type: 'blob',
        compression: 'DEFLATE',
      });
      saveAs(zipBlob, `${zipInnerFolder}.zip`);
    }

    sessionStorage.setItem('codeDepartment', String(officeNum - 1));
  }

  private buildAcademicChargeFileName(
    code: string,
    nameTeacher: string,
    nameSemester: string,
  ): string {
    const safeCode = code.replace(/\//g, '-');
    const safeTeacher = this.sanitizePathSegment(
      (nameTeacher || '').replaceAll(/ /gi, '-').replaceAll(',', ''),
    );
    const safeSemester = this.sanitizePathSegment(nameSemester || '');
    return `${safeCode}-CA-${safeTeacher}-${safeSemester}.docx`;
  }

  /** Evita /, \\ y caracteres inválidos en rutas ZIP o nombres de archivo. */
  private sanitizePathSegment(value: string): string {
    return value
      .replace(/[/\\:*?"<>|]+/g, '-')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  async createCharge(): Promise<void> {
    const period = this.periodActive;
    if (!this.teacherId || !period?.id) {
      return;
    }
    moment.locale('es');
    let codeDepartment = +(sessionStorage.getItem('codeDepartment') || 248);
    codeDepartment += 1;
    const nameTeacher = this.teachers.find((teacher) => teacher.id === this.teacherId)?.fullName?.toUpperCase();
    const nameSemester = period.name;
    const letterMoment = moment();
    const code = this.formatDisCode(codeDepartment, letterMoment.format('YYYY'));
    const img = await this.schedulesService.getFile('assets/circle-logo-udo.png');
    const logoBuffer = (await img?.arrayBuffer()) as ArrayBuffer;
    const doc = this.buildAcademicChargeDocument(
      logoBuffer,
      this.academicCharge,
      nameTeacher || '',
      code,
      letterMoment,
      nameSemester,
    );
    const blob = await Packer.toBlob(doc);
    saveAs(blob, this.buildAcademicChargeFileName(code, nameTeacher || '', nameSemester));
    sessionStorage.setItem('codeDepartment', codeDepartment.toString());
  }

  private buildAcademicChargeDocument(
    logoBuffer: ArrayBuffer,
    academicCharge: Array<ScheduleItemVM>,
    nameTeacher: string,
    code: string,
    letterMoment: moment.Moment,
    nameSemester: string,
  ): Document {
    const totalHours = academicCharge.reduce((acc, curr) => acc + (curr?.hours || 0), 0);
    return new Document({
      sections: [
        {
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  children: [
                    new ImageRun({
                      data: logoBuffer as any,
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
                  text: 'ESCUELA DE INGENIERÍA Y CIENCIAS APLICADAS',
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
                  text: 'Maturín, ' + letterMoment.format('DD MMMM') + ' de ' + letterMoment.format('YYYY'),
                  size: '12pt',
                }),
              ],
            }),
            new Paragraph({}),
            new Paragraph({
              children: [
                new TextRun({
                  text: code,
                  size: '12pt',
                  // shading: {
                  //   type: ShadingType.CLEAR,
                  //   fill: 'FFFF00',
                  // }
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
                  text: `Es grato dirigirme a usted, en la oportunidad de saludarle y hacerle entrega de su Carga Académica para el Periodo Académico ${nameSemester}; que se detalla a continuación:`,
                  size: '12pt',
                }),
              ],
              alignment: AlignmentType.JUSTIFIED,
            }),
            new Paragraph({}),
            new Table({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              rows: [
                new TableRow({
                  children: [
                    this.createCellHeadTable('Código', 20),
                    this.createCellHeadTable('Asignatura', 30),
                    this.createCellHeadTable('Sección', 10),
                    this.createCellHeadTable('Día', 10),
                    this.createCellHeadTable('Aula', 10),
                    this.createCellHeadTable('Desde', 10),
                    this.createCellHeadTable('Hasta', 10),
                  ],
                }),
                ...academicCharge.map(
                  (charge, index) => (new TableRow({
                    children: [
                      this.createCellTable(this.calculeText(academicCharge, index, charge.section?.subject?.code) ? '' : charge.section?.subject?.code || '', 20),
                      this.createCellTable(this.calculeText(academicCharge, index, charge.section?.subject?.name) ? '' : charge.section?.subject?.name || '', 30, AlignmentType.LEFT as any),
                      this.createCellTable(this.calculeText(academicCharge, index, charge.section?.name) ? '' : charge.section?.name || '', 10),
                      this.createCellTable(charge.day?.abbreviation || '', 10),
                      this.createCellTable(charge.classroom?.name || '', 10),
                      this.createCellTable(charge.start || '', 10),
                      this.createCellTable(charge.end || '', 10),
                    ]
                  }))
                ),
              ]
            }),
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
                  text: `En tal sentido, le auguro un semestre de éxitos profesionales y de buenos rendimientos para los estudiantes que cursan la(s) asignatura(s) que usted dictará en la Carrera de Ingeniería de Sistemas y en pro de enaltecer a nuestra Casa más Alta.`,
                  size: '12pt',
                }),
              ],
              alignment: AlignmentType.JUSTIFIED,
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
  }

  createCellHeadTable(str: string, size: number): TableCell {
    return new TableCell({
      width: {
        size,
        type: WidthType.PERCENTAGE,
      },
      shading: {
        fill: '99CCFF',
        type: ShadingType.CLEAR,
        color: '99CCFF',
      },
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: str,
              size: '12pt',
              color: '000099',
              bold: true,
            }),
          ],
          alignment: AlignmentType.CENTER,
        }),
      ],
    });
  }

  createCellTable(str: string, size: number, alignment = AlignmentType.CENTER): TableCell {
    return new TableCell({
      verticalAlign: VerticalAlign.CENTER,
      width: {
        size,
        type: WidthType.PERCENTAGE,
      },
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: str,
              size: '10pt',
            }),
          ],
          alignment,
        }),
      ],
    });
  }

  calculeText(academicCharge: Array<ScheduleItemVM>, index: number, str: string = ''): boolean {
    let repeat = false;
    if (index !== 0) {
      repeat = (academicCharge[index - 1].section?.subject?.code === str ||
        academicCharge[index - 1].section?.subject?.name === str ||
        academicCharge[index - 1].section?.name === str) &&
        academicCharge[index - 1].section?.subject?.code === academicCharge[index].section?.subject?.code;
    }

    return repeat;
  }
}
