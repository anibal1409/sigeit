export interface SubjectVM {
  id?: number;
  name: string;
  credits: number | string;
  hours: number;
  code: number;
  prerequisites: any | null;
  pensum_type: 'NEW' | 'OLD';
  career_id: number;
}
