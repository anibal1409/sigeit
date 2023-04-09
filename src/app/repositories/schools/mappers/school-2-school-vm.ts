import { SchoolVM } from '../model';

export function School2SchoolVM(school: any): SchoolVM {
  return {
    abbreviation: school?.abbreviation,
    description: school?.description,
    logo: school?.logo,
    name: school?.name,
    status: school?.status ? 'Activo' : 'Inactivo',
    id: school?.id,
  };
}
