import { CareerVM } from '../model';

export function Career2CareerVM(Career: any): CareerVM {
  return {
    id: Career?.id,
    name: Career?.name,
    description: Career?.description,
    abbreviation: Career?.abbreviation,
    departmentId: Career?.departmentId,
    logo: Career?.logo,
    status: Career?.status ? 'Activo' : 'Inactivo',
  };
}
