import { Component } from '@angular/core';

/** Contenedor del menú Secciones: cada pestaña es una ruta hija. */
@Component({
  selector: 'app-sections-tabs',
  templateUrl: './sections-tabs.component.html',
  styleUrls: ['./sections-tabs.component.scss'],
})
export class SectionsTabsComponent {
  readonly tabs = [
    { path: './', label: 'Listado', icon: 'list', exact: true },
    { path: 'manage', label: 'Gestión', icon: 'edit_note', exact: false },
    { path: 'overview', label: 'Vista general', icon: 'view_list', exact: false },
  ];
}
