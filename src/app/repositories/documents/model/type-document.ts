import { TypeDocument as SdkTypeDocument } from 'dashboard-sdk';

/** Del SDK solo se toma el tipo: el valor se define aquí para no depender del build de la librería. */
export type TypeDocument = SdkTypeDocument;
export const TypeDocument = {
  AcademicCharge: 'academic_charge' as TypeDocument,
} as const;

export const TYPE_DOCUMENT_LABELS: Record<TypeDocument, string> = {
  [TypeDocument.AcademicCharge]: 'Carga académica',
};
