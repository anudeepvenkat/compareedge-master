import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { UploadFileService } from '../upload/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

//const URL = 'http://10.29.53.188:8000/payroll/fileupload';
const LEGACY_URL = 'http://127.0.0.1:8000/payroll/legacyempdata/';
const NEW_URL='http://127.0.0.1:8000/payroll/newempdata/';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {
  legacySelectedFiles: FileList
  legacyUploadedSuccess = undefined;
  currentFileUpload: File
  newSelectedFiles: FileList
  newUploadedSuccess = undefined;
  newFileUpload: File
  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
    this.legacyUploadedSuccess = undefined;
    this.newUploadedSuccess = undefined;
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
