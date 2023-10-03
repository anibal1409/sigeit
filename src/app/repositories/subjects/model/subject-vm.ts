export interface SubjectVM {
  id?: number;
  name: string;
  credits: number;
  hours: number;
  code: string;
  status: boolean | string;
  semester: number;
  typeCurriculum: number;
  departmentId: number;
  careerIds: Array<number>;
  description?: string;
}
