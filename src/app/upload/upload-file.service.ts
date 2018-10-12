import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File, url: string): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    console.log(file);
    formdata.append('file', file);
    formdata.append('fileType', 'LegacySystem');

    const req = new HttpRequest('POST', url, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  compare(): Observable<any> {
    const req = new HttpRequest('GET', 'http://localhost:8086/twitterfb/compare', {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.get('http://127.0.0.1:8000/payroll/comparision').pipe(
      map(this.extractData));
  }

  login(username: string, password: string): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('username', username);
    formdata.append('password', password);

    const req = new HttpRequest('POST', 'http://localhost:8086/twitterfb/Login', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('/getallfiles')
  }
  
  public exportAsExcelFile(json: any[], excelFileName: string): void {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  this.saveAsExcelFile(excelBuffer, excelFileName);
}
private saveAsExcelFile(buffer: any, fileName: string): void {
   const data: Blob = new Blob([buffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'});
   FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + '.xlsx');
}
}
