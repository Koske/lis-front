import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";

@Injectable()
export class PresenceService {

  constructor(private httpService: HttpService) { }

  getPresenceByUser(user: any){
  	return this.httpService.post('getPresenceByUser', {user: user});
  }

  editPresence( time: any, presence: any, type: any){
	  this.httpService.post('editPresence', {time: time,presence: presence, type: type}).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  getEditedPresencesByUser(userId: any){
    return this.httpService.post('getEditedPresences', { userId: userId });
  }

}
