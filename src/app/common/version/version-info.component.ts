import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VersionService } from './version.service';

@Component({
  selector: 'app-version-info',
  template: `
    <div class="version-dialog">
      <div class="version-header">
        <mat-icon class="version-icon">info</mat-icon>
        <h2 mat-dialog-title>Información de Versión</h2>
      </div>

      <mat-dialog-content class="version-content">
        <div class="version-info-grid">
          <div class="version-item">
            <mat-icon>tag</mat-icon>
            <div class="version-item-content">
              <span class="version-label">Versión</span>
              <span class="version-value version-number">v{{ versionInfo.version }}</span>
            </div>
          </div>

          <div class="version-item">
            <mat-icon>build</mat-icon>
            <div class="version-item-content">
              <span class="version-label">Entorno</span>
              <span class="version-value version-environment">{{ versionInfo.environment | uppercase }}</span>
            </div>
          </div>

          <div class="version-item">
            <mat-icon>schedule</mat-icon>
            <div class="version-item-content">
              <span class="version-label">Fecha de Build</span>
              <span class="version-value">{{ formattedBuildDate }}</span>
            </div>
          </div>

          <div class="version-item">
            <mat-icon>extension</mat-icon>
            <div class="version-item-content">
              <span class="version-label">Angular</span>
              <span class="version-value">{{ versionInfo.angularVersion }}</span>
            </div>
          </div>

          <div class="version-item">
            <mat-icon>memory</mat-icon>
            <div class="version-item-content">
              <span class="version-label">Node.js</span>
              <span class="version-value">{{ versionInfo.nodeVersion }}</span>
            </div>
          </div>
        </div>

        <div class="version-footer">
          <mat-icon class="update-icon">update</mat-icon>
          <p class="version-note">
            Esta información se actualiza automáticamente con cada release
          </p>
        </div>
      </mat-dialog-content>

      <mat-dialog-actions class="version-actions">
        <button mat-button (click)="onClose()" type="button">
          Cerrar
        </button>
        <button mat-raised-button color="primary" (click)="copyVersionInfo()" type="button">
          <mat-icon>content_copy</mat-icon>
          Copiar Info
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .version-dialog {
      min-width: 300px;
      max-width: 350px;
    }

    ::ng-deep .mdc-dialog__container {
      min-width: 300px !important;
    }

    ::ng-deep .cdk-overlay-pane {
      width: 350px !important;
      max-width: 350px !important;
    }

    .version-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      border-bottom: 1px solid #e0e0e0;
    }

    .version-icon {
      color: var(--primary-color);
      font-size: 28px;
      width: 28px;
      height: 28px;
    }

    .version-header h2 {
      margin: 0;
      color: var(--primary-color);
      font-size: 1.5rem;
      font-weight: 500;
    }

    .version-content {
      padding: 16px;
      max-height: none;
      overflow: visible;
    }

    .version-info-grid {
      display: grid;
      gap: 16px;
    }

    .version-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background-color: #fafafa;
    }

    .version-item mat-icon {
      color: var(--primary-color);
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .version-item-content {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .version-label {
      font-size: 0.875rem;
      color: #666;
      font-weight: 500;
    }

    .version-value {
      font-size: 1rem;
      color: #333;
      font-weight: 600;
    }

    .version-environment {
      text-transform: uppercase;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
    }

    .version-environment:contains("production") {
      background-color: #e8f5e8;
      color: #2e7d32;
    }

    .version-environment:contains("development") {
      background-color: #fff3e0;
      color: #f57c00;
    }

    .version-footer {
      margin-top: 20px;
      padding: 12px;
      background-color: #f5f5f5;
      border-radius: 8px;
      border-left: 4px solid var(--primary-color);
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .version-note {
      margin: 0;
      font-size: 0.875rem;
      color: #666;
    }

    .update-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      color: var(--primary-color);
    }

    .version-actions {
      padding: 12px 16px;
      border-top: 1px solid #e0e0e0;
      justify-content: flex-end;
      gap: 12px;
    }

    .version-actions button {
      min-width: 100px;
    }

    @media (max-width: 600px) {
      .version-dialog {
        min-width: 320px;
        max-width: 100vw;
      }

      .version-content {
        padding: 16px;
      }

      .version-actions {
        flex-direction: column;
      }

      .version-actions button {
        width: 100%;
      }
    }
  `]
})
export class VersionInfoComponent {
  versionInfo: any;

  constructor(
    private versionService: VersionService,
    private dialogRef: MatDialogRef<VersionInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.versionInfo = this.versionService.getVersionInfo();
  }

  get formattedBuildDate(): string {
    try {
      return new Date(this.versionInfo.buildDate).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return this.versionInfo.buildDate;
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }

  copyVersionInfo(): void {
    const versionText = this.versionService.getDetailedVersionInfo();

    if (navigator.clipboard) {
      navigator.clipboard.writeText(versionText).then(() => {
        // Mostrar notificación de éxito
        console.log('Información de versión copiada al portapapeles');
      }).catch(err => {
        console.error('Error al copiar al portapapeles:', err);
      });
    } else {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = versionText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }
}
