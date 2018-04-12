import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AppConfig } from '../app-configuration';

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

	getUserData(givenUrl, api: boolean = true) {
		let url = (api) ? AppConfig.BASE_API_URL : AppConfig.BASE_URL;

		let headers: any = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});

		// this.http.get(url + givenUrl, headers).subscribe(data => {
		// 	console.log(data);
		// })

		return this.http.get(url + givenUrl, headers);
	}

	getUsers(givenUrl, params:any, api: boolean = true) {
		let url = (api) ? AppConfig.BASE_API_URL : AppConfig.BASE_URL;

		let headers: any = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});

		return this.http.get(url + givenUrl, {headers: headers, params: params });
	}

	getSearch(givenUrl, params:any, api: boolean = true){
		let url = (api) ? AppConfig.BASE_API_URL : AppConfig.BASE_URL;

		let headers: any = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		});

		return this.http.get(url + givenUrl, {headers: headers, params: params});
	}

	post(givenUrl, body, api: boolean = true) {
		let url = (api) ? AppConfig.BASE_API_URL : AppConfig.BASE_URL;

		let headers: any = new HttpHeaders({
		  'Content-Type': 'application/json',
		  'Access-Control-Allow-Origin': '*',
		  'Authorization': 'Bearer '+ localStorage.getItem('access_token')
		  });

		  return this.http.post(url + givenUrl, body, headers);
	}
}
