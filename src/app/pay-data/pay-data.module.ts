import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileService } from '../upload/upload-file.service';
import { PayDataComponent } from './pay-data.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PayDataComponent],
  providers:[UploadFileService],
  exports:[PayDataComponent],
  bootstrap: [PayDataComponent]
})
export class PayDataModule { }
