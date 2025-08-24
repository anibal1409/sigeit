# Sistema de Período Académico Global

Este módulo proporciona una forma global y visible de mostrar el período académico activo en toda la aplicación SIGEIT.

## Características

- **Visualización Global**: Muestra el período académico activo en el header principal de la aplicación
- **Sincronización Automática**: Se actualiza automáticamente cuando cambia el período activo
- **Indicador de Estado**: Muestra el estado de carga y el período actual
- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- **Integración Local**: También se puede mostrar en componentes específicos

## Componentes

### PeriodHeaderComponent
Componente que se muestra en el header principal de la aplicación.

**Selector**: `app-period-header`

**Características**:
- Muestra el período académico activo
- Indicador de carga
- Diseño atractivo con gradientes y sombras
- Responsive design

### GlobalPeriodService
Servicio que maneja el estado global del período académico.

**Métodos principales**:
- `getActivePeriod$()`: Observable del período activo
- `getActivePeriod()`: Valor actual del período
- `getLoading$()`: Observable del estado de carga
- `refreshPeriod()`: Refresca el período activo

## Uso

### 1. En el Header Principal
El componente se incluye automáticamente en `app.component.html`:

```html
<app-period-header></app-period-header>
```

### 2. En Componentes Específicos
Para mostrar el período en componentes específicos:

```typescript
import { GlobalPeriodService } from '../../../common/global-period';

export class MiComponente {
  constructor(private globalPeriodService: GlobalPeriodService) {}
  
  ngOnInit() {
    this.globalPeriodService.getActivePeriod$().subscribe(period => {
      if (period) {
        console.log('Período activo:', period.name);
      }
    });
  }
}
```

### 3. Banner Local del Período
Para mostrar un banner local del período (como en `planned-schedules.component.html`):

```html
<div class="period-display" *ngIf="period">
  <div class="period-banner">
    <mat-icon class="period-icon">school</mat-icon>
    <div class="period-details">
      <h3 class="period-title">Período Académico Activo</h3>
      <p class="period-name">{{ period.name }}</p>
      <p class="period-stage">Estado: {{ period.stage }}</p>
      <p class="period-dates">{{ period.start | date:'dd/MM/yyyy' }} - {{ period.end | date:'dd/MM/yyyy' }}</p>
    </div>
  </div>
</div>
```

## Estilos

El sistema incluye estilos CSS modernos con:
- Gradientes de color
- Sombras y efectos hover
- Diseño responsive
- Iconos de Material Design
- Transiciones suaves

## Integración

El servicio se integra automáticamente con:
- `SchedulesService`: Para obtener el período activo
- Componentes existentes: Para mostrar el período localmente
- Header principal: Para visualización global

## Personalización

Los estilos se pueden personalizar modificando:
- `period-header.component.scss`: Para el header global
- `planned-schedules.component.scss`: Para el banner local
- Variables CSS para colores y espaciados

## Dependencias

- Angular Material (MatIcon, MatProgressSpinner)
- RxJS para manejo de observables
- Servicios existentes de la aplicación 