export interface ClassroomVM {
  id?: number;
  name: string;
  type: 'LAB' | 'CLASSROOM' | 'VIRTUAL';
  status: boolean;
  id_department: number;
}
