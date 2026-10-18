import { TypeDocument } from 'dashboard-sdk';

// Reexportación directa: con import + export {} el dev server pierde el valor (const) de TypeDocument.
export { TypeDocument } from 'dashboard-sdk';

export const TYPE_DOCUMENT_LABELS: Record<TypeDocument, string> = {
  [TypeDocument.AcademicCharge]: 'Carga académica',
};
