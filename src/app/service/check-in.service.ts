import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from '../auth/auth-config';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CheckInService {

    constructor(private httpService: HttpService) { }

    checkIn() {
        return this.httpService.post('presence/checkin', {email: localStorage.getItem('email')}, true);
      }

}