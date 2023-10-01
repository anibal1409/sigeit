export interface TeacherVM {
  id?: number;
  idDocument: string;
  firstName: string;
  lastName: string;
  status: boolean | string;
  email: string;
  departmentId: number;
}
