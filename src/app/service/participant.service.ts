import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";

@Injectable()
export class ParticipantService {

  constructor(private httpService: HttpService) { }

  getParticipants(id: any){

    return this.httpService.post("getParticipants", {project_id: id});
  }

  addParticipant(project_id: any, id: any, participant_type: any){
  	return this.httpService.post("addParticipant", {project_id: project_id, id: id, participant_type: participant_type});
  }

  getUnparticapants(id: any){

    return this.httpService.post("getNoneParticipants", {project_id: id});
  }

  removeParticipant(project_id: any, id: any){

    return this.httpService.post("removeParticipant", {project_id: project_id, id: id});
  }

  getParticipantsForProject(etape_id: any){
    return this.httpService.post("getParticipantForProject", { etape_id: etape_id });
  }

  getParticipantTypese(){
    return this.httpService.get("getParticipantTypes");
  }
  getParticipantForTask(task: any){
    return this.httpService.post("getParticipantForTask", {id: task});
  }
}
