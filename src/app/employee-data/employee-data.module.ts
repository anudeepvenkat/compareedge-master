import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDataComponent } from './employee-data.component';
import { BrowserModule } from '@angular/platform-browser';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UploadFileService } from '../upload/upload-file.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    EmployeeDataComponent
  ],
  providers: [UploadFileService],
  bootstrap: [EmployeeDataComponent],
  exports:[EmployeeDataComponent]
})
export class EmployeeDataModule { }
