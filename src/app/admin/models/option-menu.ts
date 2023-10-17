import { UserRole } from '../../repositories/users/model';

export interface optionMenu {
  name: string;
  value: string;
  icon: string;
  permissions: Array<UserRole>;
}
