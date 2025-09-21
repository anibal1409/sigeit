import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { SectionsModule } from '../repositories/sections/sections.module';
import { SettingsModule } from '../repositories/settings/settings.module';
import { VersionDisplayComponent, VersionInfoComponent } from '../common/version';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';

@NgModule({
  declarations: [
    AdminComponent,
    VersionDisplayComponent,
    VersionInfoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SettingsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SectionsModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
  ],
  providers: [
    AdminService,
  ]
})
export class AdminModule {}
