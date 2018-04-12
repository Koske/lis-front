import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from '../auth/auth-config';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class GetUsersService {

    constructor(private httpService: HttpService) { }

    getUsers(users: any, page: any, perPage: any) {
        console.log(localStorage.getItem(users));

        const params = {
            page: page,
            perPage: perPage
        }

        return this.httpService.getUsers('user/get', params, true);
      }
}