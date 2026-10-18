import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatSelectModule,
    MatCheckboxModule,
    MatTooltipModule,
  ],
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
