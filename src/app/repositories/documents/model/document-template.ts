import { TypeDocument } from './type-document';

export interface TemplateVariable {
  key: string;
  label: string;
  /** Valor de ejemplo para la vista previa */
  example: string;
}

/** Variables disponibles por tipo de documento. {tabla} marca dónde va la tabla de horarios. */
export const DOCUMENT_VARIABLES: Record<TypeDocument, Array<TemplateVariable>> = {
  [TypeDocument.AcademicCharge]: [
    { key: 'profesor', label: 'Profesor', example: 'PÉREZ GONZÁLEZ, MARÍA' },
    { key: 'periodo', label: 'Período', example: 'I-2026' },
    { key: 'horas', label: 'Total de horas', example: '12' },
    { key: 'departamento', label: 'Departamento', example: 'Ingeniería de Sistemas' },
    { key: 'tabla', label: 'Tabla de horarios', example: '' },
  ],
};

/** Variables que el cuerpo debe incluir obligatoriamente. */
export const REQUIRED_BODY_VARIABLES: Record<TypeDocument, Array<string>> = {
  [TypeDocument.AcademicCharge]: ['tabla'],
};

/**
 * Texto por defecto: se usa al crear un formato y al generar el documento
 * cuando el departamento no tiene un formato activo.
 * Cada línea es un párrafo; una línea vacía deja un espacio; **texto** va en negrita.
 */
export const DEFAULT_TEMPLATES: Record<TypeDocument, { body: string; signature: string }> = {
  [TypeDocument.AcademicCharge]: {
    body: [
      'Ciudadano(a)',
      '**PROF. {profesor}**',
      'Presente',
      '',
      'Estimado Profesor:',
      '',
      'Es grato dirigirme a usted, en la oportunidad de saludarle y hacerle entrega de su Carga Académica para el Periodo Académico {periodo}; que se detalla a continuación:',
      '',
      '{tabla}',
      '',
      'En tal sentido, le auguro un semestre de éxitos profesionales y de buenos rendimientos para los estudiantes que cursan la(s) asignatura(s) que usted dictará en el Departamento de {departamento} y en pro de enaltecer a nuestra Casa más Alta.',
      '',
      'Sin otro particular, reiterándole mi aprecio y consideración.',
      '',
      'Le saluda',
    ].join('\n'),
    signature: [
      'Atentamente,',
      '',
      '',
      '',
      '**Jefe(a) de Departamento**',
      '',
      'C.c. Expediente, Archivo',
    ].join('\n'),
  },
};

/** Reemplaza {variable} por su valor; las desconocidas se dejan como están. */
export function fillTemplate(text: string, values: Record<string, string>): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => (key in values ? values[key] : match));
}

export interface TemplateSegment {
  text: string;
  bold: boolean;
}

/** Divide una línea en tramos normales y en negrita (**texto**). */
export function parseTemplateLine(line: string): Array<TemplateSegment> {
  return line
    .split(/(\*\*[^*]+\*\*)/)
    .filter(Boolean)
    .map((part) =>
      part.startsWith('**') && part.endsWith('**')
        ? { text: part.slice(2, -2), bold: true }
        : { text: part, bold: false },
    );
}
