import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import {
  ChartData,
  ChartOptions,
} from 'chart.js';
import {
  finalize,
  Subscription,
} from 'rxjs';
import { saveAs } from 'file-saver';
import {
  AlignmentType,
  BorderStyle,
  Document,
  Header,
  ImageRun,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';
import { BaseChartDirective } from 'ng2-charts';

import { GlobalPeriodService } from '../../common/global-period';
import { UserStateService } from '../../common/user-state';

import {
  CareerSectionStatItemVM,
  ClassroomUsageStatItemVM,
  CurriculumSemesterStatItemVM,
  DepartmentStatItemVM,
  PeriodComparisonDeltaStatVM,
  PeriodComparisonStatVM,
  SubjectDemandIncreaseStatVM,
  SectionOpenStatItemVM,
  StartTimeSlotStatItemVM,
  SubjectStatItemVM,
  TeacherWorkloadStatItemVM,
  TeachersByDayItemVM,
  TeachersByDayResponseVM,
  TimelineStatItemVM,
} from './model';
import { StatisticsPageService } from './statistics-page.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent
implements OnInit, OnDestroy, AfterViewInit
{
  periodCtrl = new FormControl<number | null>(null);
  periods: Array<{ id?: number; name?: string }> = [];

  comparisonCtrl = new FormControl<number[]>([], { nonNullable: true });
  comparison: PeriodComparisonStatVM | null = null;
  loadingComparison = false;

  teachersByDay: TeachersByDayItemVM[] = [];
  maxTeacherCount = 1;
  teachersByDayChartData: ChartData<'bar', number[], string> = {
    labels: [],
    datasets: [],
  };
  teachersByDayChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
  };

  byDepartment: DepartmentStatItemVM[] = [];
  teacherWorkload: TeacherWorkloadStatItemVM[] = [];
  classroomUsage: ClassroomUsageStatItemVM[] = [];
  startTimeSlots: StartTimeSlotStatItemVM[] = [];
  byCareer: CareerSectionStatItemVM[] = [];
  byCurriculum: CurriculumSemesterStatItemVM[] = [];
  sectionOpen: SectionOpenStatItemVM[] = [];
  timeline: TimelineStatItemVM[] = [];
  maxTimelineSections = 1;
  timelineChartData: ChartData<'line', number[], string> = {
    labels: [],
    datasets: [],
  };
  timelineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
  };
  departmentChartData: ChartData<'bar', number[], string> = {
    labels: [],
    datasets: [],
  };
  departmentChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: { x: { beginAtZero: true, ticks: { precision: 0 } } },
  };
  comparisonChartData: ChartData<'bar', number[], string> = {
    labels: [],
    datasets: [],
  };
  comparisonChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: { y: { beginAtZero: true, ticks: { precision: 0 } } },
  };
  subjectDemandIncreases: SubjectDemandIncreaseStatVM[] = [];
  subjectDemandChartData: ChartData<'bar', number[], string> = {
    labels: [],
    datasets: [],
  };
  subjectDemandChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: { legend: { display: true } },
    scales: { x: { beginAtZero: true, ticks: { precision: 0 } } },
  };
  subjectDemandDs = new MatTableDataSource<SubjectDemandIncreaseStatVM>([]);
  displayedSubjectDemand = [
    'subjectCode',
    'subjectName',
    'baseTotalCapacity',
    'referenceTotalCapacity',
    'capacityDelta',
    'baseSectionCount',
    'referenceSectionCount',
    'sectionDelta',
  ];

  subjectDs = new MatTableDataSource<SubjectStatItemVM>([]);
  displayedSubject = [
    'subjectCode',
    'subjectName',
    'sectionCount',
    'totalCapacity',
  ];

  workloadDs = new MatTableDataSource<TeacherWorkloadStatItemVM>([]);
  displayedWorkload = [
    'name',
    'sectionCount',
    'scheduleBlockCount',
    'totalSubjectHours',
  ];

  @ViewChild('subjPag') subjPag!: MatPaginator;
  @ViewChild('wlPag') wlPag!: MatPaginator;
  @ViewChild('teachersByDayChart') teachersByDayChart?: BaseChartDirective;
  @ViewChild('comparisonChart') comparisonChart?: BaseChartDirective;
  @ViewChild('timelineChart') timelineChart?: BaseChartDirective;
  @ViewChild('departmentChart') departmentChart?: BaseChartDirective;
  @ViewChild('subjectDemandChart') subjectDemandChart?: BaseChartDirective;

  classroomFilterCtrl = new FormControl<number | null>(null);
  classrooms: Array<{ id?: number; name?: string }> = [];

  loadingPeriods = false;
  loadingTeachersDay = false;
  tabLoading = false;
  loadingTimeline = false;
  exportingReport = false;

  private sub$ = new Subscription();
  private tabLoaded: Record<number, boolean> = {};

  constructor(
    private readonly stats: StatisticsPageService,
    private readonly globalPeriod: GlobalPeriodService,
    private readonly userState: UserStateService,
  ) {}

  ngOnInit(): void {
    this.loadTimeline();
    this.loadClassrooms();
    this.sub$.add(
      this.periodCtrl.valueChanges.subscribe((id) => {
        this.teachersByDay = [];
        this.tabLoaded = {};
        if (id) {
          this.loadTeachersByDay(id);
          this.reloadCurrentTab(id);
        }
      }),
    );
    this.sub$.add(
      this.classroomFilterCtrl.valueChanges.subscribe(() => {
        const pid = this.periodCtrl.value;
        if (pid && (this.tabLoaded[3] || this.tabLoaded[4])) {
          this.tabLoaded[3] = false;
          this.tabLoaded[4] = false;
          const idx = this.lastTabIndex;
          if (idx === 3 || idx === 4) {
            this.onTabChange(idx);
          }
        }
      }),
    );
    this.loadPeriods();
  }

  lastTabIndex = 0;

  ngAfterViewInit(): void {
    this.subjectDs.paginator = this.subjPag;
    this.workloadDs.paginator = this.wlPag;
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  private loadPeriods(): void {
    this.loadingPeriods = true;
    this.sub$.add(
      this.stats
        .getPeriodsForSelect$()
        .pipe(
          finalize(() => {
            this.loadingPeriods = false;
          }),
        )
        .subscribe((list) => {
          this.periods = list || [];
          const active = this.globalPeriod.getActivePeriod();
          const match = active?.id
            ? this.periods.find((p) => p.id === active.id)
            : null;
          const first = this.periods[0]?.id ?? null;
          this.periodCtrl.setValue(match?.id ?? first, { emitEvent: true });
        }),
    );
  }

  private loadClassrooms(): void {
    const dep = this.userState.getDepartmentId();
    this.sub$.add(
      this.stats.getClassroomsForFilter$(dep || undefined).subscribe((c) => {
        this.classrooms = c || [];
      }),
    );
  }

  private loadTimeline(): void {
    this.loadingTimeline = true;
    this.sub$.add(
      this.stats
        .getTimeline$()
        .pipe(finalize(() => (this.loadingTimeline = false)))
        .subscribe((rows: TimelineStatItemVM[]) => {
          this.timeline = rows || [];
          this.maxTimelineSections = Math.max(
            1,
            ...this.timeline.map((r) => r.sectionCount || 0),
          );
          this.timelineChartData = {
            labels: this.timeline.map((r) => r.periodName || ''),
            datasets: [
              {
                data: this.timeline.map((r) => r.sectionCount || 0),
                label: 'Secciones',
                borderColor: '#1976d2',
                backgroundColor: 'rgba(25, 118, 210, 0.15)',
                fill: true,
                tension: 0.3,
              },
            ],
          };
        }),
    );
  }

  loadTeachersByDay(periodId: number): void {
    this.loadingTeachersDay = true;
    this.sub$.add(
      this.stats
        .getTeachersByDay$(periodId)
        .pipe(finalize(() => (this.loadingTeachersDay = false)))
        .subscribe((res: TeachersByDayResponseVM) => {
          this.teachersByDay = res?.items || [];
          this.maxTeacherCount = Math.max(
            1,
            ...this.teachersByDay.map((d) => d.teacherCount || 0),
          );
          this.teachersByDayChartData = {
            labels: this.teachersByDay.map((d) => d.dayAbbreviation || d.dayName || ''),
            datasets: [
              {
                data: this.teachersByDay.map((d) => d.teacherCount || 0),
                label: 'Docentes',
                backgroundColor: '#1976d2',
              },
            ],
          };
        }),
    );
  }

  onTabChange(index: number): void {
    this.lastTabIndex = index;
    const pid = this.periodCtrl.value;
    if (!pid) {
      return;
    }
    if (this.tabLoaded[index]) {
      return;
    }
    this.tabLoading = true;
    const done = () => {
      this.tabLoading = false;
      this.tabLoaded[index] = true;
    };
    const classroomId = this.classroomFilterCtrl.value ?? undefined;

    switch (index) {
      case 0:
        this.sub$.add(
          this.stats
            .getByDepartment$(pid)
            .pipe(finalize(done))
            .subscribe((d: DepartmentStatItemVM[]) => {
              this.byDepartment = d || [];
              this.departmentChartData = {
                labels: this.byDepartment.map((row) => row.departmentName || ''),
                datasets: [
                  {
                    data: this.byDepartment.map((row) => row.totalCapacity || 0),
                    label: 'Cupo planificado',
                    backgroundColor: '#1976d2',
                  },
                ],
              };
            }),
        );
        break;
      case 1:
        this.sub$.add(
          this.stats
            .getBySubject$(pid)
            .pipe(finalize(done))
            .subscribe((d: SubjectStatItemVM[]) => {
              this.subjectDs.data = d || [];
              setTimeout(() => {
                if (this.subjPag) {
                  this.subjectDs.paginator = this.subjPag;
                }
              });
            }),
        );
        break;
      case 2:
        this.sub$.add(
          this.stats
            .getTeacherWorkload$(pid)
            .pipe(finalize(done))
            .subscribe((d: TeacherWorkloadStatItemVM[]) => {
              this.workloadDs.data = d || [];
              setTimeout(() => {
                if (this.wlPag) {
                  this.workloadDs.paginator = this.wlPag;
                }
              });
            }),
        );
        break;
      case 3:
        this.sub$.add(
          this.stats
            .getClassroomUsage$(pid, classroomId)
            .pipe(finalize(done))
            .subscribe((d: ClassroomUsageStatItemVM[]) => (this.classroomUsage = d || [])),
        );
        break;
      case 4:
        this.sub$.add(
          this.stats
            .getStartTimeDistribution$(pid, classroomId)
            .pipe(finalize(done))
            .subscribe((d: StartTimeSlotStatItemVM[]) => (this.startTimeSlots = d || [])),
        );
        break;
      case 5:
        this.sub$.add(
          this.stats
            .getByCareer$(pid)
            .pipe(finalize(done))
            .subscribe((d: CareerSectionStatItemVM[]) => (this.byCareer = d || [])),
        );
        break;
      case 6:
        this.sub$.add(
          this.stats
            .getByCurriculumSemester$(pid)
            .pipe(finalize(done))
            .subscribe((d: CurriculumSemesterStatItemVM[]) => (this.byCurriculum = d || [])),
        );
        break;
      case 7:
        this.sub$.add(
          this.stats
            .getSectionOpenDistribution$(pid)
            .pipe(finalize(done))
            .subscribe((d: SectionOpenStatItemVM[]) => (this.sectionOpen = d || [])),
        );
        break;
      default:
        done();
    }
  }

  private reloadCurrentTab(periodId: number): void {
    const i = this.lastTabIndex;
    this.tabLoaded[i] = false;
    this.onTabChange(i);
  }

  runComparison(): void {
    const ids = this.comparisonCtrl.value || [];
    if (ids.length < 1) {
      return;
    }
    this.loadingComparison = true;
    this.sub$.add(
      this.stats
        .getPeriodComparison$(ids)
        .pipe(finalize(() => (this.loadingComparison = false)))
        .subscribe((r: PeriodComparisonStatVM) => {
          this.comparison = r;
          const metrics = r?.metrics || [];
          this.subjectDemandIncreases = (r?.subjectDemandIncreases || [])
            .slice()
            .filter((row) => row.capacityDelta > 0 || row.sectionDelta > 0)
            .sort((a, b) => {
              const cap = (b.capacityDelta || 0) - (a.capacityDelta || 0);
              if (cap !== 0) {
                return cap;
              }
              return (b.sectionDelta || 0) - (a.sectionDelta || 0);
            });
          this.subjectDemandDs.data = this.subjectDemandIncreases;
          this.subjectDemandChartData = {
            labels: this.subjectDemandIncreases.map((row) => row.subjectName || ''),
            datasets: [
              {
                data: this.subjectDemandIncreases.map((row) => row.capacityDelta || 0),
                label: 'Δ Capacidad',
                backgroundColor: '#1976d2',
              },
              {
                data: this.subjectDemandIncreases.map((row) => row.sectionDelta || 0),
                label: 'Δ Secciones',
                backgroundColor: '#4caf50',
              },
            ],
          };
          this.comparisonChartData = {
            labels: metrics.map((m) => m.periodName || ''),
            datasets: [
              {
                data: metrics.map((m) => m.sectionCount || 0),
                label: 'Secciones',
                backgroundColor: '#1976d2',
              },
              {
                data: metrics.map((m) => m.totalCapacity || 0),
                label: 'Cupo planificado',
                backgroundColor: '#4caf50',
              },
              {
                data: metrics.map((m) => m.totalSubjectHours || 0),
                label: 'Horas-materia',
                backgroundColor: '#ff9800',
              },
            ],
          };
        }),
    );
  }

  barPct(value: number, max: number): number {
    if (!max) {
      return 0;
    }
    return Math.min(100, (100 * (value || 0)) / max);
  }

  maxDeptCapacity(): number {
    return Math.max(1, ...this.byDepartment.map((d) => d.totalCapacity || 0));
  }

  maxClassroomBlocks(): number {
    return Math.max(
      1,
      ...this.classroomUsage.map((c) => c.scheduleBlockCount || 0),
    );
  }

  maxStartBlocks(): number {
    return Math.max(1, ...this.startTimeSlots.map((s) => s.blockCount || 0));
  }

  maxCareerSections(): number {
    return Math.max(1, ...this.byCareer.map((c) => c.sectionCount || 0));
  }

  maxCurrCap(): number {
    return Math.max(1, ...this.byCurriculum.map((c) => c.totalCapacity || 0));
  }

  teacherName(t: TeacherWorkloadStatItemVM): string {
    return `${t.lastName || ''}, ${t.firstName || ''}`.trim();
  }

  openLabel(o: SectionOpenStatItemVM): string {
    return o.openToAll ? 'Abierta a todas las carreras' : 'Restringida';
  }

  deltaRow(periodId: number) {
    return this.comparison?.deltasFromFirst?.find(
      (row: PeriodComparisonDeltaStatVM) => row.periodId === periodId,
    );
  }

  maxSectionOpen(): number {
    return Math.max(
      1,
      ...this.sectionOpen.map((o) => o.sectionCount || 0),
    );
  }

  get currentPeriodName(): string {
    const pid = this.periodCtrl.value;
    return this.periods.find((p) => p.id === pid)?.name || '';
  }

  async exportGeneralReport(): Promise<void> {
    await this.exportDocx('reporte-general-estadisticas', [
      {
        title: 'Docentes por día de la semana',
        rows: this.teachersByDay.map((row) => ({
          dayName: row.dayAbbreviation || row.dayName || '',
          teacherCount: row.teacherCount || 0,
        })),
        chart: this.imageBuffer(await this.chartImage(this.teachersByDayChart)),
      },
      {
        title: 'Comparación de períodos',
        rows: this.buildComparisonRows(),
        chart: this.imageBuffer(await this.chartImage(this.comparisonChart)),
      },
      {
        title: 'Evolución (todos los períodos)',
        rows: this.timeline.map((row) => ({
          periodName: row.periodName || '',
          sectionCount: row.sectionCount || 0,
          totalCapacity: row.totalCapacity || 0,
        })),
        chart: this.imageBuffer(await this.chartImage(this.timelineChart)),
      },
      {
        title: 'Detalle por período seleccionado',
        rows: [
          ...this.buildSectionRows('Departamentos', this.byDepartment),
          ...this.buildSectionRows('Materias', this.subjectDs.data),
          ...this.buildSectionRows('Docentes', this.workloadDs.data),
          ...this.buildSectionRows('Aulas', this.classroomUsage),
          ...this.buildSectionRows('Franjas', this.startTimeSlots),
          ...this.buildSectionRows('Carreras', this.byCareer),
          ...this.buildSectionRows('Semestres', this.byCurriculum),
          ...this.buildSectionRows('Secciones abiertas', this.sectionOpen),
        ],
        chart: this.imageBuffer(await this.chartImage(this.departmentChart)),
      },
    ]);
  }

  async exportCurrentSectionReport(): Promise<void> {
    const index = this.lastTabIndex;
    const sectionMap: Record<number, { title: string; rows: Array<Record<string, unknown>>; chart?: BaseChartDirective }> = {
      0: { title: 'Departamentos', rows: this.buildDepartmentRows(), chart: this.departmentChart },
      1: { title: 'Materias', rows: this.buildSubjectRows() },
      2: { title: 'Docentes', rows: this.buildWorkloadRows() },
      3: { title: 'Aulas', rows: this.buildClassroomRows() },
      4: { title: 'Franjas', rows: this.buildStartTimeRows() },
      5: { title: 'Carreras', rows: this.buildCareerRows() },
      6: { title: 'Semestres', rows: this.buildCurriculumRows() },
      7: { title: 'Secciones abiertas', rows: this.buildSectionOpenRows() },
    };
    const entry = sectionMap[index];
    if (!entry) {
      return;
    }
    await this.exportDocx(`reporte-${this.slugify(entry.title)}`, [
      {
        title: entry.title,
        rows: entry.rows,
        chart: this.imageBuffer(await this.chartImage(entry.chart)),
      },
    ]);
  }

  private async exportDocx(
    filename: string,
    sections: Array<{ title: string; rows: Array<Record<string, unknown>>; chart?: Uint8Array }>,
  ): Promise<void> {
    this.exportingReport = true;
    try {
      const doc = new Document({
        sections: [
          {
            headers: {
              default: new Header({
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: 'Estadísticas', bold: true, size: '18pt' })],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
            },
            children: this.buildDocChildren(sections),
          },
        ],
      });
      const blob = await Packer.toBlob(doc);
      saveAs(blob, `${filename}.docx`);
    } finally {
      this.exportingReport = false;
    }
  }

  private buildDocChildren(
    sections: Array<{ title: string; rows: Array<Record<string, unknown>>; chart?: Uint8Array }>,
  ): Array<Paragraph | Table> {
    const children: Array<Paragraph | Table> = [];
    sections.forEach((section, index) => {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: section.title, bold: true, size: '14pt' })],
          spacing: { before: 240, after: 120 },
        }),
      );
      if (section.chart) {
        children.push(
          new Paragraph({
            children: [
              new ImageRun({
                data: section.chart,
                transformation: { width: 600, height: 300 },
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
        );
      }
      children.push(this.toDocTable(section.rows));
      if (index < sections.length - 1) {
        children.push(new Paragraph({ text: '', pageBreakBefore: true }));
      }
    });
    return children;
  }

  private async chartImage(chart?: BaseChartDirective): Promise<string | undefined> {
    const canvas = chart?.chart?.canvas;
    if (!canvas) {
      return undefined;
    }
    return canvas.toDataURL('image/png');
  }

  private imageBuffer(dataUrl?: string): Uint8Array | undefined {
    if (!dataUrl) {
      return undefined;
    }
    const base64 = dataUrl.split(',')[1] || '';
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }

  private toDocTable(rows: Array<Record<string, unknown>>): Table {
    const headers = rows.length ? Object.keys(rows[0]) : [];
    const body = [
      new TableRow({
        children: headers.map((header) => this.tableHeaderCell(header)),
      }),
      ...rows.map((row) => new TableRow({
        children: headers.map((header) => this.tableCell(String(row[header] ?? ''))),
      })),
    ];
    return new Table({
      layout: TableLayoutType.FIXED,
      rows: body,
      width: { size: 100, type: WidthType.PERCENTAGE },
    });
  }

  private tableHeaderCell(text: string): TableCell {
    return new TableCell({
      shading: { fill: 'D9EAF7', type: ShadingType.CLEAR, color: 'D9EAF7' },
      children: [new Paragraph({ children: [new TextRun({ text, bold: true })] })],
    });
  }

  private tableCell(text: string): TableCell {
    return new TableCell({
      children: [new Paragraph({ children: [new TextRun({ text })] })],
    });
  }

  private slugify(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  private buildComparisonRows(): Array<Record<string, unknown>> {
    return (this.comparison?.metrics || []).map((row) => ({
      periodId: row.periodId,
      periodName: row.periodName,
      periodStart: row.periodStart,
      sectionCount: row.sectionCount,
      totalCapacity: row.totalCapacity,
      totalSubjectHours: row.totalSubjectHours,
      sectionDeltaFromFirst: this.deltaRow(row.periodId)?.sectionDeltaFromFirst ?? 0,
      capacityDeltaFromFirst: this.deltaRow(row.periodId)?.capacityDeltaFromFirst ?? 0,
      subjectHoursDeltaFromFirst: this.deltaRow(row.periodId)?.subjectHoursDeltaFromFirst ?? 0,
    }));
  }

  private buildSectionRows(title: string, rows: Array<Record<string, unknown> | any>): Array<Record<string, unknown>> {
    return rows.map((row) => ({ section: title, ...row }));
  }

  private buildDepartmentRows(): Array<Record<string, unknown>> {
    return this.byDepartment.map((row) => ({
      departmentName: row.departmentName || '',
      sectionCount: row.sectionCount || 0,
      totalCapacity: row.totalCapacity || 0,
    }));
  }

  private buildSubjectRows(): Array<Record<string, unknown>> {
    return this.subjectDs.data.map((row) => ({
      subjectCode: row.subjectCode || '',
      subjectName: row.subjectName || '',
      sectionCount: row.sectionCount || 0,
      totalCapacity: row.totalCapacity || 0,
    }));
  }

  private buildWorkloadRows(): Array<Record<string, unknown>> {
    return this.workloadDs.data.map((row) => ({
      lastName: row.lastName || '',
      firstName: row.firstName || '',
      sectionCount: row.sectionCount || 0,
      scheduleBlockCount: row.scheduleBlockCount || 0,
      totalSubjectHours: row.totalSubjectHours || 0,
    }));
  }

  private buildClassroomRows(): Array<Record<string, unknown>> {
    return this.classroomUsage.map((row) => ({
      classroomName: row.classroomName || '',
      scheduleBlockCount: row.scheduleBlockCount || 0,
    }));
  }

  private buildStartTimeRows(): Array<Record<string, unknown>> {
    return this.startTimeSlots.map((row) => ({
      startTime: row.startTime || '',
      blockCount: row.blockCount || 0,
    }));
  }

  private buildCareerRows(): Array<Record<string, unknown>> {
    return this.byCareer.map((row) => ({
      careerAbbreviation: row.careerAbbreviation || '',
      careerName: row.careerName || '',
      sectionCount: row.sectionCount || 0,
    }));
  }

  private buildCurriculumRows(): Array<Record<string, unknown>> {
    return this.byCurriculum.map((row) => ({
      curriculumSemester: row.curriculumSemester || '',
      sectionCount: row.sectionCount || 0,
      totalCapacity: row.totalCapacity || 0,
    }));
  }

  private buildSectionOpenRows(): Array<Record<string, unknown>> {
    return this.sectionOpen.map((row) => ({
      status: row.openToAll ? 'Abierta a todas las carreras' : 'Restringida',
      sectionCount: row.sectionCount || 0,
    }));
  }
}
