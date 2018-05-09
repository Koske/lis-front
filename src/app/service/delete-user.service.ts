import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from '../auth/auth-config';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DeleteUserService {

  constructor(private httpService: HttpService) { }

  deleteUser(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set(  'Access-Control-Allow-Origin', '*');

    this.httpService.post('user/delete', {id: id}, true).subscribe(res => {
        console.log(res);
    });
  }
}
