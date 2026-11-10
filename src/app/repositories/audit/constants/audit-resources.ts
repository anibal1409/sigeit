/** Recursos conocidos en filtros e historial (valor API en minúsculas). */
export const AUDIT_RESOURCE_OPTIONS: ReadonlyArray<{ value: string; label: string }> = [
  { value: 'period', label: 'Período' },
  { value: 'section', label: 'Sección' },
  { value: 'subject', label: 'Asignatura' },
  { value: 'teacher', label: 'Profesor' },
  { value: 'user', label: 'Usuario' },
  { value: 'department', label: 'Departamento' },
  { value: 'schedule', label: 'Horario' },
  { value: 'classroom', label: 'Aula' },
  { value: 'school', label: 'Escuela' },
  { value: 'career', label: 'Carrera' },
  { value: 'document', label: 'Formato' },
  { value: 'auth', label: 'Autenticación' },
];

/** Etiqueta legible de un segmento `resource`. */
export function auditResourceLabel(resource: string): string {
  return AUDIT_RESOURCE_OPTIONS.find((item) => item.value === resource)?.label ?? resource;
}
