import {
  Component,
  EventEmitter,
  Inject,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalMessageModel } from './modal-message-model';

@Component({
  selector: 'sigeit-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent {
  message: ModalMessageModel = {
    title: 'Error al cargar titulo',
    body: 'Error al cargar mensaje',
  };
  hiddenActions = false;
  @Output()
  closed = new EventEmitter<boolean>();
  constructor(@Inject(MAT_DIALOG_DATA) data: { message: ModalMessageModel, hiddenActions?: boolean }) {
    this.message = data.message;
    this.hiddenActions =data?.hiddenActions ||  false;
  }

  closeModal(option: boolean): void {
    this.closed.emit(option);
  }
}
