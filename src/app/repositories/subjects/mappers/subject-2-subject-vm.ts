import { SubjectVM } from '../model';

export function Subject2SubjectVM(subject: any): SubjectVM {
  return {
    code: subject?.code,
    credits: subject?.credits,
    hours: subject?.hours,
    name: subject?.name,
    semester: subject?.semester,
    status: subject?.status,
    typeCurriculum: subject?.type_curriculum,
    id: subject?.id,
    departmentId: subject?.departmentId,
    careerIds: subject?.careerIds,
    description: subject?.description,
  };
}
