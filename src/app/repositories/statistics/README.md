# Estadísticas

Misma idea que **sections**: modelos de vista (`model/*-stat-item-vm.ts`), mappers DTO→VM (`mappers/*-dto-2-*-vm.ts`), casos de uso que llaman al SDK y hacen `.pipe(map(...))`.

- **API:** `dashboard-sdk` → `StatisticsService` + DTOs.
- **VM:** capa de presentación en `model/`; la pantalla y `statistics-page.service.ts` solo usan VM.
- **Comparación:** `GetStatisticsPeriodComparisonService` (HttpClient + mapper).

Regenerar SDK: `swagger.json` → `projects/dashboard-sdk` → `npm run dashboard-sdk`.
