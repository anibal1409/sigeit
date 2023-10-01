export enum StagePeriod {
  toPlan = 'TO_PLAN',
  Planned = 'PLANNED',
  finalized = 'FINALIZED',
}

export const STAGE_PERIODS = [
  {
    name: 'Por planificar',
    value: StagePeriod.toPlan,
  },
  {
    name: 'Planificado',
    value: StagePeriod.Planned,
  },
  {
    name: 'Finalizado',
    value: StagePeriod.finalized,
  },
];

export const STAGE_PERIODS_VALUE = {
  [StagePeriod.toPlan]: STAGE_PERIODS[0],
  [StagePeriod.Planned]: STAGE_PERIODS[1],
  [StagePeriod.finalized]: STAGE_PERIODS[2],
};
