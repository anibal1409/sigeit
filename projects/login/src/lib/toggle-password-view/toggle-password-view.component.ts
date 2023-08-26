import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'toggle-password-view',
  templateUrl: './toggle-password-view.component.html',
  styleUrls: ['./toggle-password-view.component.scss'],
})
export class TogglePasswordViewComponent {
  @Input()
  inputHostId: string | null = null;

  showPassword = false;

  @HostBinding()
  class = 'input-group-text';

  @HostListener('click')
  onClick(): void {
    if (!this.inputHostId) {
      return;
    }
    const input = document.getElementById(this.inputHostId) as HTMLInputElement;
    if (input) {
      input.type = this.showPassword ? 'password' : 'text';
    }
    this.showPassword = !this.showPassword;
  }
}
