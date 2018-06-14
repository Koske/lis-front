import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpService } from "../../../http/http.service";
import { ProjectService } from "../../../service/project.service";

@Component({
 selector: 'app-task-details',
 templateUrl: './task-details.component.html',
 styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit{

 constructor(private route: ActivatedRoute,
             private httpService: HttpService,
             private projectService: ProjectService,
             private router: Router) { }
 taskId = {
   id: 0
 }
 task = {};
 getAllTasks(){
   this.projectService.getTasks()
     .subscribe((response: any) => {
       for(let el of response){
         if(el.id == this.taskId.id){
           el.start = el.start.substring(0, 10);
             if(el.end){
               let part1 = el.end.substring(0, 10);
               let part2 = el.end.substring(11, 19);
               el.end = part1+ " " +part2;
               console.log(el.end);
             }

           this.task = el;

         }
       }
       console.log(this.task);
     });
 }
 ngOnInit() {
   this.taskId = {
     id: this.route.snapshot.params['id']
   };

   this.getAllTasks();


 }


 onDone(){
   this.projectService.doneTask(this.task);
   this.getAllTasks();
 }
 onEdit(){
     this.router.navigate(['/projects', this.taskId.id, 'edit-task']);

   }

}