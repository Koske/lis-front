import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from '../auth/auth-config';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EditUserService {
  user: any;

  constructor(private httpService: HttpService) { }

  edit(user: any) {
    let headers = new HttpHeaders();
    headers = headers.set(  'Access-Control-Allow-Origin', '*');

    this.httpService.post('user/update', user, true).subscribe(res => {
        console.log(res);
    });
  }
}
