import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { VERSION_INFO } from '../../../environments/version';

export interface VersionInfo {
  version: string;
  buildDate: string;
  environment: string;
  nodeVersion?: string;
  angularVersion?: string;
}

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private versionSubject = new BehaviorSubject<VersionInfo>(this.getVersionInfo());
  public version$ = this.versionSubject.asObservable();

  constructor() {}

  /**
   * Obtiene la información de versión actual
   */
  getVersionInfo(): VersionInfo {
    return {
      version: this.getAppVersion(),
      buildDate: this.getBuildDate(),
      environment: this.getEnvironment(),
      nodeVersion: this.getNodeVersion(),
      angularVersion: this.getAngularVersion()
    };
  }

  /**
   * Obtiene la versión actual de la aplicación
   */
  getCurrentVersion(): string {
    return this.getAppVersion();
  }

  /**
   * Actualiza la información de versión
   */
  updateVersionInfo(): void {
    this.versionSubject.next(this.getVersionInfo());
  }

  /**
   * Obtiene la versión desde VERSION_INFO
   */
  private getAppVersion(): string {
    return VERSION_INFO.APP_VERSION || '0.0.0';
  }

  /**
   * Obtiene la fecha de build
   */
  private getBuildDate(): string {
    return VERSION_INFO.BUILD_DATE || new Date().toISOString();
  }

  /**
   * Obtiene el entorno actual
   */
  private getEnvironment(): string {
    return VERSION_INFO.ENVIRONMENT || 'development';
  }

  /**
   * Obtiene la versión de Node.js
   */
  private getNodeVersion(): string {
    return VERSION_INFO.NODE_VERSION || 'unknown';
  }

  /**
   * Obtiene la versión de Angular
   */
  private getAngularVersion(): string {
    return VERSION_INFO.ANGULAR_VERSION || 'unknown';
  }

  /**
   * Formatea la información de versión para mostrar
   */
  getFormattedVersion(): string {
    const info = this.getVersionInfo();
    return `v${info.version} (${info.environment})`;
  }

  /**
   * Obtiene información detallada para mostrar en modal o página
   */
  getDetailedVersionInfo(): string {
    const info = this.getVersionInfo();
    return `
      Versión: ${info.version}
      Entorno: ${info.environment}
      Fecha de Build: ${new Date(info.buildDate).toLocaleDateString()}
      Angular: ${info.angularVersion}
      Node.js: ${info.nodeVersion}
    `;
  }
}
