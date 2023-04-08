export interface ClassroomVM {
  id?: number;
  name: string;
  type: 'LAB' | 'CLASSROOM' | 'VIRTUAL';
  status: boolean | string;
  id_department: number;
}
