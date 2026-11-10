---
# Dedicación del profesor (frontend)

**Fecha:** 2026-11-09

## Qué
Integración del enum `TeacherDedication` regenerado en el SDK:
`EXCLUSIVA` | `TIEMPO_COMPLETO` | `MEDIO_TIEMPO`.

## Por qué
La API dejó de aceptar los valores antiguos (`EXCLUSIVE`, `FULL_TIME`, `HALF_TIME`,
`CONVENTIONAL`). Toda respuesta de profesor incluye `dedication` (por defecto
`EXCLUSIVA` en registros existentes).

## Qué se eliminó
Opciones hardcodeadas con valores en inglés y la opción «Sin especificar» en el
formulario (la dedicación siempre tiene valor).

## Pendientes
`GET /teacher` no filtra por dedicación; un filtro en listado sería solo cliente o
requeriría endpoint en la API.
