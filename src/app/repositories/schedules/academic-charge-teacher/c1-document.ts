import {
  AlignmentType,
  BorderStyle,
  Document,
  HeightRule,
  ImageRun,
  PageOrientation,
  Paragraph,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  VerticalAlign,
  VerticalMergeType,
  WidthType,
} from 'docx';
import { SubjectInstructionType } from 'dashboard-sdk';

import {
  instructionTypeFromHours,
  SUBJECT_INSTRUCTION_LABEL,
  SubjectVM,
} from '../../subjects/model';
import {
  CATEGORY_OPTIONS,
  DEDICATION_OPTIONS,
  optionName,
  TeacherItemVM,
} from '../../teachers/model';
import { ScheduleItemVM } from '../model';

/** Semanas lectivas por período usadas en el total de horas del semestre. */
export const C1_SEMESTER_WEEKS = 16;

/** Firma de la dirección académica en el C-1 institucional (EICA / Monagas). */
export const C1_DIRECTOR_NAME = 'Profa. Hortensia Carolina Calzadilla Bastidas';

/** Anchos de columna del C1 en DXA (suman el ancho útil apaisado A4). */
const COLS = [964, 2897, 481, 2123, 1058, 1111, 1240, 1009, 1240, 1243, 1293] as const;
const TABLE_WIDTH = COLS.reduce((sum, width) => sum + width, 0);
/** Ancho de la celda del logo (~0,97" + holgura para que no se recorte). */
const LOGO_COL = 1500;
const HEADER_TEXT_COL = TABLE_WIDTH - LOGO_COL;
/** Altura mínima de la fila del membrete: 0,94" del logo en DXA. */
const LOGO_ROW_HEIGHT = Math.round(0.94 * 1440);

const THIN = { style: BorderStyle.SINGLE, size: 4, color: '000000' };
const BORDERS = { top: THIN, bottom: THIN, left: THIN, right: THIN };
const NO_BORDER = {
  top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
};

/** Tamaños de fuente en half-points (docx-js): 12 pt → 24, etc. */
const PT_9 = 18;
const PT_11 = 22;
const PT_12 = 24;
const PT_18 = 36;

/** Márgenes internos de las celdas de la tabla de asignaturas (DXA). */
const CELL_MARGINS = { top: 40, bottom: 40, left: 60, right: 60 };

export interface C1DocumentInput {
  logoBuffer: ArrayBuffer;
  schoolName: string;
  departmentName: string;
  periodName: string;
  academicYear: string;
  teacher: TeacherItemVM;
  schedules: Array<ScheduleItemVM>;
  /** Nombre completo con título; por defecto la directora del formato oficial. */
  directorName?: string;
}

interface C1SubjectRow {
  code: string;
  name: string;
  activity: string;
  totalStudents: number;
  studentsPerSection: number;
  sections: number;
  hoursLines: Array<string>;
  totalHoursWeek: number;
  weeks: number;
  totalHoursSemester: number;
}

/**
 * Construye el Word del formulario C-1 (distribución de carga académica)
 * a partir de las secciones del profesor en el período.
 */
export function buildC1Document(input: C1DocumentInput): Document {
  const rows = buildC1Rows(input.schedules);
  const teacherLine = formatTeacherLine(input.teacher);
  const metaLine =
    `NÚCLEO: MONAGAS      ESCUELA: ${normalizeSchool(input.schoolName)}      DEPARTAMENTO: ${input.departmentName.toUpperCase()}.`;
  const periodLine = `AÑO LECTIVO: ${input.academicYear}       PERÍODO: ${input.periodName}.`;
  const directorName = input.directorName?.trim() || C1_DIRECTOR_NAME;

  return new Document({
    sections: [
      {
        properties: {
          page: {
            // docx-js intercambia ancho/alto cuando la orientación es landscape.
            size: {
              width: 11909,
              height: 16834,
              orientation: PageOrientation.LANDSCAPE,
            },
            margin: {
              top: 562,
              right: 1138,
              bottom: 562,
              left: 1138,
              header: 706,
              footer: 706,
            },
          },
        },
        children: [
          headerTable(input.logoBuffer),
          titleRow(),
          // Título del formulario: Arial 12 pt, negrita, centrado.
          textParagraph(
            'INFORMACIÓN INDIVIDUAL SOBRE DISTRIBUCIÓN DE CARGA ACADÉMICA',
            { bold: true, size: PT_12, align: AlignmentType.CENTER },
          ),
          spacer(80),
          // Datos de núcleo/profesor/período: Arial 11 pt.
          textParagraph(metaLine, { size: PT_11, align: AlignmentType.LEFT }),
          spacer(40),
          textParagraph(teacherLine, { size: PT_11, align: AlignmentType.LEFT }),
          textParagraph(periodLine, { size: PT_11, align: AlignmentType.LEFT }),
          spacer(120),
          subjectsTable(rows),
          spacer(400),
          signaturesTable(signatureTeacherName(input.teacher), directorName),
        ],
      },
    ],
  });
}

/** Nombre de archivo del C1, p. ej. C-1-LOPEZ-SANCHEZ-III-2026.docx. */
export function buildC1FileName(teacherName: string, periodName: string): string {
  const teacher = sanitize(teacherName || 'profesor');
  const period = sanitize(periodName || 'periodo');
  return `C-1-${teacher}-${period}.docx`;
}

/**
 * Completa cada horario con horas T/P y modalidad desde el catálogo de
 * asignaturas del departamento (fuente fiable tras el contrato nuevo).
 */
export function enrichSchedulesWithSubjects(
  schedules: Array<ScheduleItemVM>,
  subjects: Array<SubjectVM>,
): Array<ScheduleItemVM> {
  const byId = new Map(
    subjects
      .filter((subject) => subject.id != null)
      .map((subject) => [subject.id as number, subject]),
  );
  return schedules.map((schedule) => {
    const section = schedule.section;
    const nested = section?.subject;
    if (!section || !nested?.id) {
      return schedule;
    }
    const full = byId.get(nested.id);
    if (!full) {
      return schedule;
    }
    return {
      ...schedule,
      section: {
        ...section,
        subject: {
          ...nested,
          code: full.code || nested.code,
          name: full.name || nested.name,
          hours: full.hours,
          theoreticalHours: full.theoreticalHours,
          practicalHours: full.practicalHours,
          instructionType: full.instructionType,
        },
      },
    };
  });
}

/** Agrupa horarios por asignatura y calcula alumnos, secciones y horas del C1. */
export function buildC1Rows(schedules: Array<ScheduleItemVM>): Array<C1SubjectRow> {
  type Acc = {
    code: string;
    name: string;
    hours: number;
    theoreticalHours: number;
    practicalHours: number;
    instructionType?: SubjectInstructionType;
    sections: Map<number, number>;
  };
  const bySubject = new Map<number, Acc>();

  schedules.forEach((schedule) => {
    const section = schedule.section;
    const subject = section?.subject;
    if (!section?.id || !subject?.id) {
      return;
    }
    let entry = bySubject.get(subject.id);
    if (!entry) {
      const theoreticalHours = subject.theoreticalHours ?? 0;
      const practicalHours = subject.practicalHours ?? 0;
      entry = {
        code: subject.code || '',
        name: (subject.name || '').toUpperCase(),
        hours: subject.hours || 0,
        theoreticalHours,
        practicalHours,
        instructionType: subject.instructionType,
        sections: new Map(),
      };
      bySubject.set(subject.id, entry);
    }
    entry.sections.set(section.id, section.capacity || 0);
  });

  return [...bySubject.values()]
    .sort((a, b) => a.code.localeCompare(b.code))
    .map((entry) => {
      const sections = entry.sections.size;
      const studentsPerSection = Math.max(...entry.sections.values(), 0);
      const weekly = weeklyHours(entry);
      const totalHoursWeek = weekly * sections;
      return {
        code: entry.code,
        name: entry.name,
        activity: activityLabel(entry),
        totalStudents: studentsPerSection * sections,
        studentsPerSection,
        sections,
        hoursLines: formatWeeklyHours(entry),
        totalHoursWeek,
        weeks: C1_SEMESTER_WEEKS,
        totalHoursSemester: totalHoursWeek * C1_SEMESTER_WEEKS,
      };
    });
}

function weeklyHours(entry: {
  hours: number;
  theoreticalHours: number;
  practicalHours: number;
}): number {
  const split = entry.theoreticalHours + entry.practicalHours;
  return split > 0 ? split : entry.hours;
}

/** Actividad del C-1: usa `instructionType` de la API o lo deriva del reparto. */
function activityLabel(entry: {
  hours: number;
  theoreticalHours: number;
  practicalHours: number;
  instructionType?: SubjectInstructionType;
}): string {
  const type =
    entry.instructionType ??
    (entry.theoreticalHours > 0 || entry.practicalHours > 0
      ? instructionTypeFromHours(entry.theoreticalHours, entry.practicalHours)
      : SubjectInstructionType.Teorica);
  return SUBJECT_INSTRUCTION_LABEL[type]
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase();
}

/**
 * Horas semanales en renglones `N HRS T` / `M HRS P`.
 * Sin desglose (datos viejos): se asume todo teórico, como el default de la API.
 */
function formatWeeklyHours(entry: {
  hours: number;
  theoreticalHours: number;
  practicalHours: number;
}): Array<string> {
  const theory = entry.theoreticalHours;
  const practice = entry.practicalHours;
  if (theory > 0 || practice > 0) {
    const lines: Array<string> = [];
    if (theory > 0) {
      lines.push(`${theory} HRS T`);
    }
    if (practice > 0) {
      lines.push(`${practice} HRS P`);
    }
    return lines;
  }
  if (entry.hours > 0) {
    return [`${entry.hours} HRS T`];
  }
  return ['—'];
}

function formatTeacherLine(teacher: TeacherItemVM): string {
  const name = `${teacher.lastName || ''} ${teacher.firstName || ''}`.trim().toUpperCase();
  const ci = formatIdDocument(teacher.idDocument);
  const category = (optionName(CATEGORY_OPTIONS, teacher.category) || '—')
    .replace(/\s*\([^)]*\)\s*/g, '')
    .trim()
    .toUpperCase();
  const dedication = (optionName(DEDICATION_OPTIONS, teacher.dedication) || '')
    .trim()
    .toUpperCase();
  const rank = dedication ? `${category} –${dedication}` : category;
  return `PROFESOR: ${name} C.I. Nº: ${ci}   CATEGORÍA-DEDICACIÓN: ${rank}.`;
}

/** Nombre en firma: «Prof. Nombre Apellido», orden natural. */
function signatureTeacherName(teacher: TeacherItemVM): string {
  const name = `${teacher.firstName || ''} ${teacher.lastName || ''}`.trim();
  return name || teacher.fullName?.trim() || '';
}

function formatIdDocument(idDocument?: string): string {
  const digits = String(idDocument || '').replace(/\D/g, '');
  if (digits.length < 7) {
    return idDocument || '—';
  }
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

/** Escuela sin el prefijo «ESCUELA DE», con (EICA) si falta. */
function normalizeSchool(name: string): string {
  let upper = (name || '').toUpperCase().replace(/\s+/g, ' ').trim();
  upper = upper.replace(/^ESCUELA\s+DE\s+/i, '');
  return upper.includes('EICA') ? upper : `${upper} (EICA)`.trim();
}

function sanitize(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[/\\:*?"<>|,]+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toUpperCase();
}

/**
 * Membrete en una sola fila: logo a la izquierda (0,97"×0,94") y las cuatro
 * líneas a la derecha. Así la fila crece con el logo y no lo recorta.
 */
function headerTable(logoBuffer: ArrayBuffer): Table {
  const lines = [
    'UNIVERSIDAD DE ORIENTE',
    'NÚCLEO DE MONAGAS',
    'ESCUELA DE INGENIERIA Y CIENCIAS APLICADAS',
    'MATURIN – MONAGAS – VENEZUELA',
  ];
  // Mismo tamaño que el C-1 oficial: 0,97" × 0,94" (96 dpi → px).
  const logoWidthPx = 93;
  const logoHeightPx = 90;
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    columnWidths: [LOGO_COL, HEADER_TEXT_COL],
    rows: [
      new TableRow({
        height: { value: LOGO_ROW_HEIGHT, rule: HeightRule.ATLEAST },
        children: [
          new TableCell({
            borders: NO_BORDER,
            width: { size: LOGO_COL, type: WidthType.DXA },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new ImageRun({
                    data: logoBuffer as never,
                    transformation: {
                      width: logoWidthPx,
                      height: logoHeightPx,
                    },
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            borders: NO_BORDER,
            width: { size: HEADER_TEXT_COL, type: WidthType.DXA },
            verticalAlign: VerticalAlign.CENTER,
            children: lines.map((line) =>
              textParagraph(line, {
                bold: false,
                size: PT_12,
                align: AlignmentType.LEFT,
              }),
            ),
          }),
        ],
      }),
    ],
  });
}

/** «C-1»: Arial 18 pt, negrita, alineado a la derecha. */
function titleRow(): Table {
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    columnWidths: [TABLE_WIDTH],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders: NO_BORDER,
            width: { size: TABLE_WIDTH, type: WidthType.DXA },
            children: [
              textParagraph('C-1', {
                bold: true,
                size: PT_18,
                align: AlignmentType.RIGHT,
                after: 40,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function subjectsTable(rows: Array<C1SubjectRow>): Table {
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    columnWidths: [...COLS],
    rows: [
      headerRow(),
      subHeaderRow(),
      ...rows.map((row) => dataRow(row)),
      ...(rows.length ? [] : [emptyRow()]),
    ],
  });
}

function headerRow(): TableRow {
  return new TableRow({
    children: [
      cell(['ASIGNATURAS'], COLS[0] + COLS[1], true, true),
      mergeHeaderCell(['E', 'O'], COLS[2], VerticalMergeType.RESTART),
      mergeHeaderCell(['ACTIVIDAD'], COLS[3], VerticalMergeType.RESTART),
      mergeHeaderCell(['Total Alumnos'], COLS[4], VerticalMergeType.RESTART),
      mergeHeaderCell(['Alumnos', 'por Sec.'], COLS[5], VerticalMergeType.RESTART),
      mergeHeaderCell(['Nº Sec.'], COLS[6], VerticalMergeType.RESTART),
      mergeHeaderCell(['N° Horas', 'por Sem.'], COLS[7], VerticalMergeType.RESTART),
      mergeHeaderCell(['Total', 'H/Sem.'], COLS[8], VerticalMergeType.RESTART),
      mergeHeaderCell(['N° Sem', 'Por Semest'], COLS[9], VerticalMergeType.RESTART),
      mergeHeaderCell(['Total', 'H/Semestre'], COLS[10], VerticalMergeType.RESTART),
    ],
  });
}

function subHeaderRow(): TableRow {
  return new TableRow({
    children: [
      cell(['CÓDIGO'], COLS[0], true),
      cell(['NOMBRE'], COLS[1], true),
      mergeHeaderCell([''], COLS[2], VerticalMergeType.CONTINUE),
      mergeHeaderCell([''], COLS[3], VerticalMergeType.CONTINUE),
      mergeHeaderCell([''], COLS[4], VerticalMergeType.CONTINUE),
      mergeHeaderCell([''], COLS[5], VerticalMergeType.CONTINUE),
      mergeHeaderCell([''], COLS[6], VerticalMergeType.CONTINUE),
      mergeHeaderCell([''], COLS[7], VerticalMergeType.CONTINUE),
      mergeHeaderCell([''], COLS[8], VerticalMergeType.CONTINUE),
      mergeHeaderCell([''], COLS[9], VerticalMergeType.CONTINUE),
      mergeHeaderCell([''], COLS[10], VerticalMergeType.CONTINUE),
    ],
  });
}

function dataRow(row: C1SubjectRow): TableRow {
  return new TableRow({
    children: [
      cell([row.code], COLS[0]),
      cell([row.name], COLS[1], false, false, AlignmentType.LEFT),
      cell([''], COLS[2]),
      cell([row.activity], COLS[3]),
      cell([String(row.totalStudents || '')], COLS[4]),
      cell([String(row.studentsPerSection || '')], COLS[5]),
      cell([String(row.sections || '')], COLS[6]),
      cell(row.hoursLines, COLS[7]),
      cell([`${row.totalHoursWeek} HRS`], COLS[8]),
      cell([`${row.weeks} SEM`], COLS[9]),
      cell([`${row.totalHoursSemester} HRS`], COLS[10]),
    ],
  });
}

function emptyRow(): TableRow {
  return new TableRow({
    children: COLS.map((width) => cell([''], width)),
  });
}

function signaturesTable(teacherName: string, directorName: string): Table {
  const width = Math.floor(TABLE_WIDTH / 3);
  return new Table({
    width: { size: TABLE_WIDTH, type: WidthType.DXA },
    layout: TableLayoutType.FIXED,
    columnWidths: [width, width, width],
    rows: [
      new TableRow({
        children: [
          signCell([`Prof. ${teacherName}`], width),
          signCell(['Sello'], width),
          signCell([directorName], width),
        ],
      }),
      new TableRow({
        children: [
          signCell([''], width, false),
          signCell([''], width, false),
          // Cargo bajo el nombre: misma tipografía, sin negrita.
          signCell(['Directora'], width, false),
        ],
      }),
    ],
  });
}

function signCell(lines: Array<string>, width: number, bold = true): TableCell {
  // Firmas (profesor, sello, directora): Arial 12 pt en negrita.
  return new TableCell({
    borders: NO_BORDER,
    width: { size: width, type: WidthType.DXA },
    children: lines.map((line) =>
      textParagraph(line, {
        bold,
        size: PT_12,
        align: AlignmentType.CENTER,
      }),
    ),
  });
}

function mergeHeaderCell(
  lines: Array<string>,
  width: number,
  verticalMerge: typeof VerticalMergeType.RESTART | typeof VerticalMergeType.CONTINUE,
): TableCell {
  return new TableCell({
    borders: BORDERS,
    width: { size: width, type: WidthType.DXA },
    margins: CELL_MARGINS,
    verticalMerge,
    verticalAlign: VerticalAlign.CENTER,
    children: (lines.length ? lines : ['']).map(
      (line) =>
        textParagraph(line, {
          bold: true,
          size: PT_9,
          align: AlignmentType.CENTER,
        }),
    ),
  });
}

function cell(
  lines: Array<string>,
  width: number,
  bold = false,
  mergeNext = false,
  align: typeof AlignmentType.CENTER | typeof AlignmentType.LEFT = AlignmentType.CENTER,
): TableCell {
  // Contenido de la tabla: Arial 9 pt, con márgenes internos.
  return new TableCell({
    borders: BORDERS,
    width: { size: width, type: WidthType.DXA },
    margins: CELL_MARGINS,
    columnSpan: mergeNext ? 2 : 1,
    verticalAlign: VerticalAlign.CENTER,
    children: (lines.length ? lines : ['']).map(
      (line) =>
        textParagraph(line, {
          bold,
          size: PT_9,
          align,
        }),
    ),
  });
}

function textParagraph(
  text: string,
  options: {
    bold?: boolean;
    size: number;
    align: typeof AlignmentType.CENTER | typeof AlignmentType.LEFT | typeof AlignmentType.RIGHT;
    after?: number;
  },
): Paragraph {
  return new Paragraph({
    alignment: options.align,
    spacing: options.after != null ? { after: options.after } : undefined,
    children: [
      new TextRun({
        text,
        bold: !!options.bold,
        size: options.size,
        font: 'Arial',
      }),
    ],
  });
}

function spacer(after: number): Paragraph {
  return new Paragraph({ spacing: { after } });
}
