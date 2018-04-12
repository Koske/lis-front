import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from './auth-config';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class AuthService {
  user: any;
  access_token: any;

  constructor(private httpService: HttpService) { }

  login(username: string, password: string) {
      const params:any = {
          username: 'nesa823@gmail.com',
          password: 'Veternik91',
          client_id: AuthConfig.CLIENT_ID,
          client_secret: AuthConfig.CLIENT_SECRET,
          grant_type: 'password'
      };


      this.httpService.get('oauth/v2/token', params, false).subscribe(res => {
          this.access_token = res;
          localStorage.setItem('access_token', this.access_token.access_token);
	  });
  }
  
}
