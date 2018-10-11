import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

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
}
