import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfig } from "../app-configuration";

@Injectable()
export class HttpService {

  	constructor(private http: HttpClient) {}


	get(givenUrl, params: HttpParams = new HttpParams(), api: boolean = true) {

  		let url = (api) ? AppConfig.BASE_API_URL : AppConfig.BASE_URL;

  		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
			});

  		let options = {
			headers: headers,
			params: params
		};

		return this.http.get(url + givenUrl, options);
	}
}
