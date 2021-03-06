import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";

@Injectable()
export class ProjectService {

 constructor(private httpService: HttpService) { }

     newProject(project: any){
       this.httpService.post("np", project).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     getProjects(){
       return this.httpService.get("gp");
     }

     getProjectsPP(page: any, perPage: any){
       const params:any = {
         page: page,
         perPage: perPage
       }
       return this.httpService.get("gppp", params, true);
     }

     searchProject(finished: any, page: any, perPage: any, searchTerm: any){
       return this.httpService.post("searchProjects", {finished: finished, page: page, perPage: perPage, searchTerm: searchTerm});
     }

     editProjects(project: any){
       this.httpService.post("ep", project).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     filterProject(finished: any, page: any, perPage: any){
       return this.httpService.post("filterProjects", {finished: finished, page: page, perPage: perPage});
     }

     removeProject(id: any){
       this.httpService.post("dp", {id: id}).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     finishProject(id: any){
       this.httpService.post("finishProject", {id: id}).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     newEtape(etape: any){
       this.httpService.post("dtp", etape).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     getEtapes(){
       return this.httpService.get("ge");
     }

     editEtape(etape: any){
       this.httpService.post("editEtape", {etape: etape}).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     getEtapeById(id: any){
       return this.httpService.post("getEtapeById", { id: id });
     }

     setEtapeHours(project_id: any){
       this.httpService.post("getEtapeHours", {project_id: project_id}).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     newTask(task: any){
       this.httpService.post("tp",task).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     editTask(task: any){
       this.httpService.post("editTask", task).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     getTasks(){
       return this.httpService.get("gett");
     }

     doneTask(task: any){
       this.httpService.post("donet", task).subscribe(
           (response) => console.log(response),
           (error) => console.log(error)
         );
     }

     getTaskById(id: any){
       return this.httpService.post("getTaskById", {id: id});
     }

     getTaskByEtape(etape_id: any){
       return this.httpService.post("getTaskByEtape", {etape_id: etape_id});
     }
}