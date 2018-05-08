import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AuthConfig } from '../auth/auth-config';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class GetUserDataService {

    constructor(private httpService: HttpService) { }

    getUserData() {
        return this.httpService.getUserData('user/data', true);
    }

    getUserById(id) {
        // console.log("user_id: ", id.id);

        // this.httpService.getUserData('user/create-data', true).subscribe(data => {
        //     	console.log(data);
        // });

        return this.httpService.post('user/get', {user_id: id.id}, true);
    }


}