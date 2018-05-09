import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ProjectService } from "../service/project.service";
import { Router} from '@angular/router';


@Component({
 selector: 'app-projects',
 templateUrl: './projects.component.html',
 styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit  {
 projectsIter :any[];
 projects :any[];
 id: number;
 pages: any[] = [];
 totalPages = {
   total_pages: []
 };
 projectId: number = -1;
 projectIndex: number = -1;

 constructor(private router: Router,
             private projectService: ProjectService) { }


 ngOnInit() {
   this.getAllProjects(1);

 }

 stashInfo(prId, ind){
   if(this.projectId == prId){
     this.projectId = -1;
     this.projectIndex = -1;
     let table = document.getElementById(prId);
     table.classList.toggle("active");
   }
   else if(this.projectId!= -1){
     let id = this.projectId.toString();
     let table = document.getElementById(id);
     table.classList.toggle("active");

     this.projectId = prId;
     this.projectIndex = ind;
     let id2 = this.projectId.toString();
     table = document.getElementById(id2);
     table.classList.toggle("active");
   }
   else{
     this.projectId = prId;
     this.projectIndex = ind;

     let table = document.getElementById(prId);
     table.classList.toggle("active");
   }

   console.log(this.projectId, this.projectIndex);
 }

 getAllProjects(page){
   this.projectService.getProjectsPP(page, 5)
     .subscribe((response: any) => {
       this.projectsIter = response.projects;
       this.projects = response;
       console.log(response);
       this.totalPages = response;

       for(let i = 1; i <= response.total_pages; i++){
         this.pages.push(i);
       }

       this.totalPages.total_pages = this.pages;

     });
 }



 nextPage(page, total) {
  this.pages = [];
  let nextPage = Number(page)+1;
  if(nextPage-1 != total){
    this.getAllProjects(nextPage);
  }
}

 newPage(page){
   this.pages = [];
   this.getAllProjects(page);
 }

 previousPage(page) {
   this.pages = [];
   let previousPage = Number(page)-1;
   if(page-1 != 1){
     this.getAllProjects(page);
   }else if(page !=1)
   {
     this.getAllProjects(page);
   }
 }


 onEdit(){
   if(this.projectId != -1){
     this.router.navigate(['/projects', this.projectId, 'edit']);
   }
 }

 onRemove(){
   if(this.projectId != -1){
     if(confirm("Are you sure you want to delete this project?")) {
       this.id = this.projectId;

       this.projectsIter.splice(this.projectIndex, 1);

       this.projectService.removeProject(this.id);
     }
   }


 }
 onDetails(){
   if(this.projectId != -1){
     this.id = this.projectId;
     this.router.navigate(['/projects', this.projectId, 'details']);
   }

 }



}