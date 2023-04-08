import { SubjectVM } from '../model';

export function Subject2SubjectVM(subject: any): SubjectVM {
  return {
    code: subject?.code,
    credits: subject?.credits,
    hours: subject?.hours,
    name: subject?.name,
    semester: subject?.semester,
    status: subject?.status,
    type_curriculum: subject?.type_curriculum,
    id: subject?.id,
    department_id: subject?.department_id,
  };
}