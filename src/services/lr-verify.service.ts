import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LrVerifyService {

  constructor(private http: HttpClient) {
    this.header = new Headers({ 'Content-Type': 'application/json' });
  }

  private header;
  private url = environment.baseUrl + '/operations/lr_verify/';

  lrVerify(data) {
    return this.http.post(this.url,
      data,
      {
        headers: this.header,
        observe: 'response',
      }
    );
  }

}
