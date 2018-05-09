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

 editProjects(project: any){
   this.httpService.post("ep", project).subscribe(
       (response) => console.log(response),
       (error) => console.log(error)
     );
 }

 removeProject(id: any){
   this.httpService.post("dp", {id: id}).subscribe(
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

 newTask(task: any){
   this.httpService.post("tp",task).subscribe(
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
}