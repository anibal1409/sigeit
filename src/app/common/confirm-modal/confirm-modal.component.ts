import {
  Component,
  EventEmitter,
  Inject,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
  parseBoldText,
  TextSegment,
} from '../text';
import { ModalMessageModel } from './modal-message-model';

/**
 * Diálogo de confirmación genérico. El cuerpo admite `**texto**` para negritas y saltos
 * de línea (`\n`) para separar párrafos; se muestra como texto plano: nunca se interpreta HTML, así los nombres escritos por el
 * usuario no pueden inyectar marcado.
 */
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
  /** Oculta los botones Cancelar/Aceptar (mensaje solo informativo). */
  hiddenActions = false;
  /** Cuerpo del mensaje: una entrada por línea, dividida en tramos normales y en negrita. */
  bodyLines: Array<Array<TextSegment>> = [];
  /** Emite true al aceptar y false al cancelar o cerrar. */
  @Output()
  closed = new EventEmitter<boolean>();

  constructor(@Inject(MAT_DIALOG_DATA) data: { message: ModalMessageModel, hiddenActions?: boolean }) {
    this.message = data.message;
    this.hiddenActions = data?.hiddenActions || false;
    this.bodyLines = this.message.body.split('\n').map(parseBoldText);
  }

  /** Cierra el diálogo informando la opción elegida. */
  closeModal(option: boolean): void {
    this.closed.emit(option);
  }
}
