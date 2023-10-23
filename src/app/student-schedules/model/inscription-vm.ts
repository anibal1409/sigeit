import { SectionItemVM } from '../../repositories/sections';
import { UserItemVM } from '../../repositories/users';
import { StageInscription } from './stage';

export interface InscriptionVM {
  id?: number;
  stage: StageInscription;
  sectionId: number;
  section?: SectionItemVM;
  userId: number;
  user?: UserItemVM
}