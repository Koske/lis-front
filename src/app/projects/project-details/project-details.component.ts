import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from "../../service/project.service";
import { ActivatedRoute, Router} from '@angular/router';


@Component({
 selector: 'app-project-details',
 templateUrl: './project-details.component.html',
 styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {


 constructor(private projectService: ProjectService,
             private route: ActivatedRoute,
             private router: Router) { }

 projectId = {
   id: 0
 }
 projectName = '';

 etap: any[] = [];

 ngOnInit() {
   this.projectId = {
     id: this.route.snapshot.params['id']
   };

   this.projectService.getProjects()
     .subscribe((response: any) => {
       for(let el of response){
         if(el.id == this.projectId.id){
           this.projectName = el.name;
         }
       }
     });
     this.projectService.getEtapes()
       .subscribe((response: any) => {
         for(let el of response){
           if(el.project.id == this.projectId.id){

             let start = el.start.substring(0, 10);
             let end = el.end.substring(0, 10);
             let newStart = +new Date(start);
             let newEnd = +new Date(end);
             let currentDate = +new Date();

             let differenceUno = Math.abs(newStart - newEnd);
             let differenceDuo = Math.abs(newStart - currentDate);

             let percentage = Math.round(100 / ( differenceUno / differenceDuo ));

             el.percentage = percentage;
             this.etap.push(el);
             console.log(this.etap);
           }
         }

       });
 }



 onAddEtape(){
   this.router.navigate(['/projects', this.projectId.id, 'etape']);

 }


}