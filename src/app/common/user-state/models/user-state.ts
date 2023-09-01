import { DepartmentVM } from '../../../repositories/departments/model';
import { SchoolVM } from '../../../repositories/schools/model';
import { TeacherVM } from '../../../repositories/teachers';

export interface UserStateVM {
  id: number;
  name: string;
  email: string;
  role: string;
  loginStamp: number;
  department?: DepartmentVM;
  school?: SchoolVM;
  teacher?: TeacherVM;
}
