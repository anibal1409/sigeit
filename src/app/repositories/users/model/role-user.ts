export enum UserRole {
  Administrator = 'admin',
  Director = 'director',
  HeadDepartment = 'head-department',
  Planner = 'planner',
  Teacher = 'teacher',
  Student = 'student',
}

export const USER_ROLES = [
  {
    name: 'Administrador',
    value: UserRole.Administrator,
  },
  {
    name: 'Director',
    value: UserRole.Director,
  },
  {
    name: 'Jefe de departamento',
    value: UserRole.HeadDepartment,
  },
  {
    name: 'Planificador',
    value: UserRole.Planner,
  },
  {
    name: 'Profesor',
    value: UserRole.Teacher,
  },
  {
    name: 'Estudiante',
    value: UserRole.Student,
  }
];

export const USER_ROLES_VALUE: { [key: string]: { name: string; value: UserRole} } = {
  [UserRole.Administrator]: USER_ROLES[0],
  [UserRole.Director]: USER_ROLES[1],
  [UserRole.HeadDepartment]: USER_ROLES[2],
  [UserRole.Planner]: USER_ROLES[3],
  [UserRole.Teacher]: USER_ROLES[4],
  [UserRole.Student]: USER_ROLES[5],
};
