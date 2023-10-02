import { Department2DepartmentVM } from '../../departments';
import { School2SchoolVM } from '../../schools';
import { Teacher2TeacherVM } from '../../teachers';
import { USER_ROLES_VALUE } from '../model';
import { UserItemVM } from '../model/user-item-vm';
import { User2UserVM } from './user-2-user-vm';

export function User2UserItemVM(user: any): UserItemVM {
  const userVM = User2UserVM(user);
  return {
    ...userVM,
    roleText: USER_ROLES_VALUE[user.role]?.name,
    status: user.status ? 'Activo' : 'Inactivo',
    department: Department2DepartmentVM(user?.departament),
    school: School2SchoolVM(user?.school),
    teacher: Teacher2TeacherVM(user?.teacher),
  };
}
