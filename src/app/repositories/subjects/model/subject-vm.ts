export interface SubjectVM {
  id?: number;
  name: string;
  credits: number | string;
  hours: number;
  code: number;
  status: boolean;
  semester: number;
  type_curriculum: string;
}
