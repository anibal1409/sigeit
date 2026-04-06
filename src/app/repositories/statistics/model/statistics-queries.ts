/** Parámetros de los casos de uso de estadísticas (alineados con la API). */

export interface StatisticsPeriodComparisonQuery {
  periodIds: number[];
}

export interface StatisticsPeriodIdQuery {
  periodId: number;
}

export interface StatisticsClassroomOptionalQuery extends StatisticsPeriodIdQuery {
  classroomId?: number;
}
