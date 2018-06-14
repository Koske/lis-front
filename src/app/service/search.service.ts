import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from '../auth/auth-config';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

    constructor(private httpService: HttpService) { }

    getSearch(users: any, page: any, perPage: any, searchTerm: any) {
        console.log(localStorage.getItem(users));

        const params:any = {
            page: page,
            perPage: perPage,
            searchTerm: searchTerm
        }

        return this.httpService.get('user/search', params, true);
      }
}