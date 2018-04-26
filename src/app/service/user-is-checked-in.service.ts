import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from '../auth/auth-config';
import { HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class UserIsCheckedInService {

    constructor(private httpService: HttpService) { }

    userIsCheckedIn() {
        return this.httpService.post('presence/userIsCheckedIn', {email: localStorage.getItem('email')}, true);
    }
    
}