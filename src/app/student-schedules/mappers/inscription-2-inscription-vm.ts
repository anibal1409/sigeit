import { Section2SectionItemVM } from '../../repositories/sections';
import { User2UserItemVM } from '../../repositories/users';
import { InscriptionVM } from '../model';

export function inscription2InscriptionVM(inscription: any): InscriptionVM {
  const user = User2UserItemVM(inscription?.user);
  const section = Section2SectionItemVM(inscription?.section);
  return {
    id: inscription.id,
    sectionId: inscription.sectionId,
    stage: inscription.stage,
    userId: inscription.userId,
    user,
    section,
  };
}