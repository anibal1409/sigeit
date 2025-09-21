import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VersionService } from './version.service';
import { VersionInfoComponent } from './version-info.component';

@Component({
  selector: 'app-version-display',
  template: `
    <div class="version-display" (click)="showVersionInfo()">
      <mat-icon class="version-icon">info_outline</mat-icon>
      <span class="version-text">{{ formattedVersion }}</span>
      <mat-icon class="version-arrow">keyboard_arrow_down</mat-icon>
    </div>
  `,
  styles: [`
    .version-display {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.05);
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 0.875rem;
      color: #666;
      border: 1px solid transparent;
    }

    .version-display:hover {
      background-color: rgba(0, 0, 0, 0.1);
      border-color: var(--primary-color);
      color: var(--primary-color);
    }

    .version-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }

    .version-text {
      font-weight: 500;
      font-family: 'Roboto Mono', monospace;
    }

    .version-arrow {
      font-size: 14px;
      width: 14px;
      height: 14px;
      transition: transform 0.2s ease;
    }

    .version-display:hover .version-arrow {
      transform: rotate(180deg);
    }

    @media (max-width: 768px) {
      .version-display {
        padding: 6px 8px;
        font-size: 0.75rem;
      }

      .version-text {
        display: none;
      }
    }
  `]
})
export class VersionDisplayComponent implements OnInit {
  formattedVersion: string = '';

  constructor(
    private versionService: VersionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formattedVersion = this.versionService.getFormattedVersion();
  }

  showVersionInfo(): void {
    this.dialog.open(VersionInfoComponent, {
      width: '500px',
      maxHeight: '80vh',
      disableClose: false,
      data: {}
    });
  }
}
