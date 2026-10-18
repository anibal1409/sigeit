import {
  ActivatedRoute,
  Params,
  Router,
} from '@angular/router';

/**
 * Escribe filtros en la URL para que sobrevivan al recargar.
 * Mezcla con los parámetros existentes; null/''/false/undefined los elimina.
 */
export function writeUrlQuery(router: Router, route: ActivatedRoute, params: Params): void {
  const queryParams: Params = {};
  Object.entries(params).forEach(([key, value]) => {
    queryParams[key] = value === '' || value === false || value === undefined ? null : value;
  });
  router.navigate([], {
    relativeTo: route,
    queryParams,
    queryParamsHandling: 'merge',
    replaceUrl: true,
  });
}

/** Lee un número de la URL; 0 si no está. */
export function readUrlNumber(route: ActivatedRoute, key: string): number {
  return +(route.snapshot.queryParamMap.get(key) || 0);
}
