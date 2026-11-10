# Asignaturas: horas y modalidad

**Fecha:** 2026-11-09

## Qué
Integración de `theoreticalHours`, `practicalHours` e `instructionType` en el
frontend de asignaturas y en el C-1.

## Por qué
La API exige que teoría + práctica = total semanal y calcula la modalidad.
El formulario debe validar antes del POST/PATCH para evitar 400.

## Qué no se envía
`instructionType` no va en create/update; solo se muestra (listado / preview).
