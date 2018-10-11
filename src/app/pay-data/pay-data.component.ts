import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

const LEGACY_URL = 'http://127.0.0.1:8000/payroll/legacyemppaydata/';
const NEW_URL='http://127.0.0.1:8000/payroll/newemppaydata/';

@Component({
  selector: 'app-pay-data',
  templateUrl: './pay-data.component.html',
  styleUrls: ['./pay-data.component.css']
})
export class PayDataComponent implements OnInit {

  legacySelectedFiles: FileList
  currentFileUpload: File
  newSelectedFiles: FileList
  newFileUpload: File
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  legacySelectFile(event) {
    this.legacySelectedFiles = event.target.files;
  }
  newSelectFile(event) {
    this.newSelectedFiles = event.target.files;
  }

  legacyUpload() {

    this.currentFileUpload = this.legacySelectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.currentFileUpload,LEGACY_URL).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        console.log(event);
      }
    })

    this.legacySelectedFiles = undefined;
  }
  newUpload() {

    this.newFileUpload = this.newSelectedFiles.item(0)
    this.uploadService.pushFileToStorage(this.newFileUpload,NEW_URL).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        console.log(event);
      }
    })

    this.newSelectedFiles = undefined;
  }

}
