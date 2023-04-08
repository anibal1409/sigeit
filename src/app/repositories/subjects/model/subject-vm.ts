export interface SubjectVM {
  id?: number;
  name: string;
  credits: number | string;
  hours: number;
  code: number;
  status: boolean | string;
  semester: number;
  type_curriculum: string;
  department_id: number;
}
