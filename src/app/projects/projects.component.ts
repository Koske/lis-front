import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http/http.service";
import { ProjectService } from "../service/project.service";
import { Router} from '@angular/router';


@Component({
 selector: 'app-projects',
 templateUrl: './projects.component.html',
 styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
     projectsIter :any[];
     projects :any[];
     searchPages: any;
     
     id: number;
     pages: any[] = [];
     totalPages = {
       total_pages: []
     };
     projectId: number = -1;
     projectIndex: number = -1;
     again: boolean = true;
     filter: boolean = false;

     constructor(private router: Router,
                 private projectService: ProjectService) { }


 ngOnInit() {
   this.getAllProjects(1);

 }

 search(page, searchTerm){
    this.projectService.searchProject(this.filter, page, 5, searchTerm).subscribe((response: any) => {
      
      this.searchPages = response;
      this.pages = [];
       this.projectsIter = response.projects;
       this.projects = response;
       for(let el of this.projectsIter){
         el.estimated_duration = el.estimated_duration.substring(0, 10);
         el.start_date = el.start_date.substring(0, 10);
       }
       this.totalPages = response;

       for(let i = 1; i <= response.total_pages; i++){
         for(let k = 0; k < this.pages.length; k++){
           if(this.pages[k]==i){
           this.again = false;
           }
         }
           if(this.again){
             this.pages.push(i);
           }
       }
       this.totalPages.total_pages = this.pages;
      
    });
  }

  searchBtn(searchTerm:any){
     if(this.projectId!=-1){
     let id2 = this.projectId.toString();
     let table = document.getElementById(id2);
     table.classList.toggle("active");
     this.projectId = -1;
     this.projectIndex = -1;
   }
    this.search(1,searchTerm);
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
       this.pages = [];
       this.projectsIter = response.projects;
       this.projects = response;
       for(let el of this.projectsIter){
         el.estimated_duration = el.estimated_duration.substring(0, 10);
         el.start_date = el.start_date.substring(0, 10);
       }
       this.totalPages = response;

       for(let i = 1; i <= response.total_pages; i++){
         for(let k = 0; k < this.pages.length; k++){
           if(this.pages[k]==i){
           this.again = false;
           }
         }
           if(this.again){
             this.pages.push(i);
           }
       }
       this.totalPages.total_pages = this.pages;

     });
 }

 filterProjects(page){

   this.projectService.filterProject(this.filter, page, 5)
     .subscribe((response: any) => {
       this.pages = [];
       this.projectsIter = response.projects;
       this.projects = response;
       for(let el of this.projectsIter){
         el.estimated_duration = el.estimated_duration.substring(0, 10);
         el.start_date = el.start_date.substring(0, 10);
       }
       this.totalPages = response;

       for(let i = 1; i <= response.total_pages; i++){
         for(let k = 0; k < this.pages.length; k++){
           if(this.pages[k]==i){
           this.again = false;
           }
         }
           if(this.again){
             this.pages.push(i);
           }
       }
       this.totalPages.total_pages = this.pages;
     });
 }

  toggleFilter(){
    if(this.projectId!=-1){
     let id2 = this.projectId.toString();
     let table = document.getElementById(id2);
     table.classList.toggle("active");
     this.projectId = -1;
     this.projectIndex = -1;
   }
   this.filter = !this.filter;
   if(this.filter){
     this.filterProjects(1);
   }else{
     this.getAllProjects(1);
   }

 }



 nextPage(page, total) {
   if(this.projectId!=-1){
     let id2 = this.projectId.toString();
     let table = document.getElementById(id2);
     table.classList.toggle("active");
     this.projectId = -1;
     this.projectIndex = -1;
   }

  let nextPage = Number(page)+1;
  if(nextPage-1 != total){
    if(this.filter){
         this.filterProjects(nextPage);
       }else{
         this.getAllProjects(nextPage);
       }
  }
}

 newPage(page){
   if(this.projectId!=-1){
     let id2 = this.projectId.toString();
     let table = document.getElementById(id2);
     table.classList.toggle("active");
     this.projectId = -1;
     this.projectIndex = -1;
   }
   if(this.filter){
         this.filterProjects(page);
       }else{
         this.getAllProjects(page);
       }
 }

 previousPage(page) {
   if(this.projectId!=-1){
     let id2 = this.projectId.toString();
     let table = document.getElementById(id2);
     table.classList.toggle("active");
     this.projectId = -1;
     this.projectIndex = -1;
   }
   let previousPage = Number(page)-1;
   if(page-1 != 1){
     if(this.filter){
         this.filterProjects(page);
       }else{
         this.getAllProjects(page);
       }
   }else if(page !=1)
   {
     if(this.filter){
         this.filterProjects(page);
       }else{
         this.getAllProjects(page);
       }
   }
 }

 onFinish(){
   if(this.projectId!= -1){
     this.projectService.finishProject(this.projectId);
     
     let id = this.projectId.toString();
     let table = document.getElementById(id);
     table.classList.toggle("active");
     this.projectId = -1;
     if(this.filter){
         this.filterProjects(1);
       }else{
         this.getAllProjects(1);
       }
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
       this.projectId = -1;
       this.projectIndex = -1;

       this.projectService.removeProject(this.id);
       
       if(this.filter){
         this.filterProjects(1);
       }else{
         this.getAllProjects(1);
       }
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
