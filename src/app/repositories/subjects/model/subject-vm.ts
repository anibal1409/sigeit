export interface SubjectVM {
  id?: number;
  name: string;
  credits: number;
  hours: number;
  code: number;
  prerequisites: any | null;
  pensum_type: 'NEW' | 'OLD';
}
