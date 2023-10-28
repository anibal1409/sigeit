export enum StagePeriod {
  toStart = 'TO_START',
  toPlan = 'TO_PLAN',
  Planned = 'PLANNED',
  finalized = 'FINALIZED',
}

export const STAGE_PERIODS = [
  {
    name: 'Por iniciar',
    value: StagePeriod.toStart,
    order: 1,
  },
  {
    name: 'Por planificar',
    value: StagePeriod.toPlan,
    order: 2,
  },
  {
    name: 'Planificado',
    value: StagePeriod.Planned,
    order: 3,
  },
  {
    name: 'Finalizado',
    value: StagePeriod.finalized,
    disabled: true,
    order: 4,
  },
];

export const STAGE_PERIODS_VALUE = {
  [StagePeriod.toStart]: STAGE_PERIODS[0],
  [StagePeriod.toPlan]: STAGE_PERIODS[1],
  [StagePeriod.Planned]: STAGE_PERIODS[2],
  [StagePeriod.finalized]: STAGE_PERIODS[3],
};
