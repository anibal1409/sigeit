export interface ClassroomVM {
  id?: number;
  name: string;
  type: string;
  status: boolean | string;
  departmentIds: Array<number>;
  description?: string;
}
