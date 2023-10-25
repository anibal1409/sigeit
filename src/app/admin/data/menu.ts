import { UserRole } from '../../repositories/users/model';
import { optionMenu } from '../models';

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
    permissions: [UserRole.Administrator],
  },
  {
    name: 'Horarios',
    value: 'schedules-students',
    icon: 'dashboard',
    permissions: [UserRole.Administrator, UserRole.Director, UserRole.HeadDepartment, UserRole.Planner, UserRole.Student],
  },
  {
    name: 'Inscripción',
    value: 'inscription',
    icon: 'playlist_add_check',
    permissions: [UserRole.Student],
  },
  {
    name: 'Carga Académica',
    value: 'academic-charge',
    icon: 'class',
    permissions: [UserRole.Director, UserRole.HeadDepartment, UserRole.Planner, UserRole.Teacher],
  },
]