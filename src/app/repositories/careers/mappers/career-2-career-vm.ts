import { CareerVM } from '../model';

export function Career2CareerVM(Career: any): CareerVM {
  return {
    id: Career?.id,
    name: Career?.name,
    description: Career?.description,
    abbreviation: Career?.abbreviation,
    id_department: Career?.id_department,
    logo: Career?.logo,
    status: Career?.status,
  };
}
