/** Vista: comparación entre períodos. */
export interface PeriodMetricStatVM {
  periodId: number;
  periodName: string;
  periodStart: string;
  sectionCount: number;
  totalCapacity: number;
  totalSubjectHours: number;
}

export interface PeriodComparisonDeltaStatVM {
  periodId: number;
  sectionDeltaFromFirst: number;
  capacityDeltaFromFirst: number;
  subjectHoursDeltaFromFirst: number;
}

export interface SubjectDemandIncreaseStatVM {
  subjectId: number;
  subjectCode: string;
  subjectName: string;
  baseTotalCapacity: number;
  referenceTotalCapacity: number;
  capacityDelta: number;
  baseSectionCount: number;
  referenceSectionCount: number;
  sectionDelta: number;
}

export interface PeriodComparisonStatVM {
  metrics: Array<PeriodMetricStatVM>;
  deltasFromFirst: Array<PeriodComparisonDeltaStatVM>;
  subjectDemandIncreases: Array<SubjectDemandIncreaseStatVM>;
}
