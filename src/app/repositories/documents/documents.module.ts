import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { StateModule } from '../../common';
import { TableModule } from '../../common/table';
import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import { DocumentsFileService } from './documents.service';
import { FormComponent } from './form/form.component';
import { MemoryDocumentsService } from './memory/memory-documents';
import { CreateDocumentService } from './use-cases/create-document';
import { DeleteDocumentService } from './use-cases/delete-document';
import { FindDocumentService } from './use-cases/find-document';
import { GetDocumentsService } from './use-cases/get-documents';
import { UpdateDocumentService } from './use-cases/update-document';

@NgModule({
  declarations: [
    DocumentsComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    ReactiveFormsModule,
    TableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    StateModule,
    MatFormFieldModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    DocumentsFileService,
    MemoryDocumentsService,
    GetDocumentsService,
    CreateDocumentService,
    DeleteDocumentService,
    FindDocumentService,
    UpdateDocumentService,
  ],
})
export class DocumentsModule { }
