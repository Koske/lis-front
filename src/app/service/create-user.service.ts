import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from '../auth/auth-config';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class CreateUserService {
  user: any;

  constructor(private httpService: HttpService) { }

  register(user: any) {
    console.log(localStorage.getItem(user));

    this.httpService.post('user/create', user, true).subscribe(res => {
        console.log(res);
    });
  }
}
