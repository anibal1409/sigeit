import { UserRole } from '../../repositories/users/model';
import { optionMenu } from '../models';

/**
 * Opciones del panel y roles que pueden usarlas. Es la matriz de permisos de la UI: la
 * usan el menú y el guard de rutas (`roleGuard`), y debe coincidir con la de la API
 * (ver `docs/CHANGELOG.md`). `value` es el primer segmento de la ruta bajo `/dashboard`.
 */
export const MENU: Array<optionMenu> = [
  {
    name: 'Asignaturas',
    value: 'subjects',
    icon: 'class',
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Aulas',
    value: 'classrooms',
    icon: 'door_sliding',
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Carreras',
    value: 'careers',
    icon: 'school',
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Configuraciones',
    value: 'settings',
    icon: 'settings',
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Demanda por asignatura',
    value: 'subject-demands',
    icon: 'groups',
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Departamentos',
    value: 'departments',
    icon: 'apartment',
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Escuelas',
    value: 'schools',
    icon: 'local_library',
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Planificación académica',
    value: 'scheludes',
    icon: 'date_range',
    permissions: [UserRole.Administrator, UserRole.Director, UserRole.HeadDepartment, UserRole.Planner,],
  },
  {
    name: 'Periodos Académicos',
    value: 'periods',
    icon: 'hourglass_empty',
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Profesores',
    value: 'teachers',
    icon: 'account_box',
    permissions: [UserRole.Administrator, UserRole.Director, UserRole.HeadDepartment,],
  },
  {
    name: 'Secciones',
    value: 'sections',
    icon: 'cast_for_education',
    permissions: [UserRole.Administrator, UserRole.Director, UserRole.HeadDepartment, UserRole.Planner,],
  },
  {
    name: 'Usuarios',
    value: 'users',
    icon: 'person',
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Formatos',
    value: 'formats',
    icon: 'insert_drive_file',
    permissions: [UserRole.Administrator, UserRole.HeadDepartment],
  },
  {
    name: 'Horarios',
    value: 'schedules-students',
    icon: 'dashboard',
    permissions: [UserRole.Administrator, UserRole.Director, UserRole.HeadDepartment, UserRole.Planner, UserRole.Student],
  },
  {
    name: 'Carga Académica',
    value: 'academic-charge',
    icon: 'class',
    permissions: [UserRole.Director, UserRole.HeadDepartment, UserRole.Planner, UserRole.Teacher],
  },
];

/** Opciones del menú que puede ver el rol, ordenadas por nombre. */
export function menuForRole(role: string): Array<optionMenu> {
  return MENU
    .filter((item) => item.permissions.includes(role as UserRole))
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));
}

/**
 * Indica si el rol puede entrar a una sección del panel (primer segmento bajo
 * `/dashboard`). Las secciones que no están en el menú (inicio, perfil) son libres.
 */
export function canAccessSection(role: string, section: string): boolean {
  const item = MENU.find((option) => option.value === section);
  return !item || item.permissions.includes(role as UserRole);
}
