import { instructionTypeFromHours } from '../model/subject-options';
import { SubjectVM } from '../model';

export function Subject2SubjectVM(subject: any): SubjectVM {
  const theoreticalHours = subject?.theoreticalHours ?? 0;
  const practicalHours = subject?.practicalHours ?? 0;
  return {
    code: subject?.code,
    credits: subject?.credits,
    hours: subject?.hours,
    theoreticalHours,
    practicalHours,
    instructionType:
      subject?.instructionType ??
      instructionTypeFromHours(theoreticalHours, practicalHours),
    name: subject?.name,
    semester: subject?.semester,
    status: subject?.status,
    typeCurriculum: subject?.typeCurriculum ?? subject?.type_curriculum,
    id: subject?.id,
    departmentId: subject?.departmentId,
    careerIds: subject?.careerIds ?? [],
    description: subject?.description,
  };
}
