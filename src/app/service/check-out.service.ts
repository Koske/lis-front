import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from '../auth/auth-config';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CheckOutService {

    constructor(private httpService: HttpService) { }

    checkOut() {
    
        return this.httpService.post('presence/checkout', {email: localStorage.getItem('email')}, true);
      }

}