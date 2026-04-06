import {
  PeriodComparisonDeltaDto,
  PeriodComparisonResponseDto,
  PeriodMetricResponseDto,
  SubjectDemandIncreaseItemDto,
} from 'dashboard-sdk';

import {
  PeriodComparisonDeltaStatVM,
  PeriodComparisonStatVM,
  PeriodMetricStatVM,
  SubjectDemandIncreaseStatVM,
} from '../model';

function PeriodMetricResponseDto2PeriodMetricStatVM(
  dto: PeriodMetricResponseDto | null | undefined,
): PeriodMetricStatVM {
  return {
    periodId: dto?.periodId ?? 0,
    periodName: dto?.periodName ?? '',
    periodStart: dto?.periodStart ?? '',
    sectionCount: dto?.sectionCount ?? 0,
    totalCapacity: dto?.totalCapacity ?? 0,
    totalSubjectHours: dto?.totalSubjectHours ?? 0,
  };
}

function PeriodComparisonDeltaDto2PeriodComparisonDeltaStatVM(
  dto: PeriodComparisonDeltaDto | null | undefined,
): PeriodComparisonDeltaStatVM {
  return {
    periodId: dto?.periodId ?? 0,
    sectionDeltaFromFirst: dto?.sectionDeltaFromFirst ?? 0,
    capacityDeltaFromFirst: dto?.capacityDeltaFromFirst ?? 0,
    subjectHoursDeltaFromFirst: dto?.subjectHoursDeltaFromFirst ?? 0,
  };
}

function SubjectDemandIncreaseItemDto2SubjectDemandIncreaseStatVM(
  dto: SubjectDemandIncreaseItemDto | null | undefined,
): SubjectDemandIncreaseStatVM {
  return {
    subjectId: dto?.subjectId ?? 0,
    subjectCode: dto?.subjectCode ?? '',
    subjectName: dto?.subjectName ?? '',
    baseTotalCapacity: dto?.baseTotalCapacity ?? 0,
    referenceTotalCapacity: dto?.referenceTotalCapacity ?? 0,
    capacityDelta: dto?.capacityDelta ?? 0,
    baseSectionCount: dto?.baseSectionCount ?? 0,
    referenceSectionCount: dto?.referenceSectionCount ?? 0,
    sectionDelta: dto?.sectionDelta ?? 0,
  };
}

export function PeriodComparisonResponseDto2PeriodComparisonStatVM(
  dto: PeriodComparisonResponseDto | null | undefined,
): PeriodComparisonStatVM {
  return {
    metrics: (dto?.metrics || []).map(PeriodMetricResponseDto2PeriodMetricStatVM),
    deltasFromFirst: (dto?.deltasFromFirst || []).map(
      PeriodComparisonDeltaDto2PeriodComparisonDeltaStatVM,
    ),
    subjectDemandIncreases: (dto?.subjectDemandIncreases || []).map(
      SubjectDemandIncreaseItemDto2SubjectDemandIncreaseStatVM,
    ),
  };
}
