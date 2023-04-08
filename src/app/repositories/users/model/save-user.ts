export interface SaveUser {
  id?: number;
  firstName: string;
  lastName: string;
  id_document: number;
  email: string;
  role?: string;
  permissions: [any];
  birthday_date: Date | string;
  status: boolean | string;
}
