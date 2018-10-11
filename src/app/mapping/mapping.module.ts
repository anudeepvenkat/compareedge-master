import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MappingComponent } from './mapping.component';
import { RouterModule } from '@angular/router';
import { UploadFileService } from '../upload/upload-file.service';
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AgGridModule.withComponents(
      [MappingComponent]
  )
  ],
  declarations: [MappingComponent],
  providers:[UploadFileService],
  exports:[MappingComponent],
  bootstrap: [MappingComponent]
})
export class MappingModule { }
