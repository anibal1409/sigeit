# Auditoría del sistema (frontend)

**Fecha:** 2026-11-09

## Qué
Panel `/dashboard/audit` para `GET /audit/logs`, `/audit/stats`, `/audit/logs/:id`
y `/audit/entity/:resource/:entityId`.

## Por qué
Administración necesita trazabilidad sin confundir con
`/schedule/planning/audit` (choques de planificación).

## Permisos
Solo `Administrator` en menú y guard; 403 en API para otros roles.

## Pendientes
Pestaña de historial en formularios de período, sección, asignatura, etc.
