# C-1 alineado al formato oficial

**Fecha:** 2026-11-09

## Qué
El Word C-1 replica el ejemplo `docs/C-1 ANDRICK LOPEZ III-2026 - A4.docx`:
horas T/P, «C-1» a la derecha, firmas con directora institucional.

## Por qué
La primera generación mostraba solo el total de horas (`3 HRS`) y firmas genéricas;
el formato oficial desglosa teórico/práctico y nombra a la Directora.

## Datos
`theoreticalHours` / `practicalHours` salen de la asignatura (API). Si faltan, se
usa `hours` como total. Nombre de la Directora: constante `C1_DIRECTOR_NAME`
(mismo valor del formato EICA/Monagas).
