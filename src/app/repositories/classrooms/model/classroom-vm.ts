export interface ClassroomVM {
  id?: number;
  name: string;
  type: 'LAB' | 'CLASROOM' | 'VIRTUAL';
  status: boolean;
  id_department: number;
}
