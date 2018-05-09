import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpService } from "../../../http/http.service";
import { ProjectService } from "../../../service/project.service";

@Component({
 selector: 'app-task-details',
 templateUrl: './task-details.component.html',
 styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, DoCheck {

 constructor(private route: ActivatedRoute,
             private httpService: HttpService,
             private projectService: ProjectService) { }
 taskId = {
   id: 0
 }
 task = {};
 getAllTasks(){
   this.projectService.getTasks()
     .subscribe((response: any) => {
       for(let el of response){
         if(el.id == this.taskId.id){
           this.task = el;
         }
       }
     });
 }
 ngOnInit() {
   this.taskId = {
     id: this.route.snapshot.params['id']
   };

   this.getAllTasks();

 }
  ngDoCheck(){
    this.getAllTasks();

 }

 onDone(){
   this.projectService.doneTask(this.task);
 }

}