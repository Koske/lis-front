import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from "../../http/http.service";
import { ActivatedRoute, Router} from '@angular/router';
import { ProjectService } from "../../service/project.service";

@Component({
 selector: 'app-task',
 templateUrl: './task.component.html',
 styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
 @ViewChild('t') taskForm: NgForm;

 task = {
   etapeId: 0,
   name: '',
   description: '',
   dateStarted: new Date(),
   hour: 0
 }
 etapeId = {
   id: 0
 }
 ai: any;

 constructor(private httpService: HttpService,
             private route: ActivatedRoute,
             private projectService: ProjectService,
             private router: Router) { }

 ngOnInit() {
   this.etapeId = {
     id: this.route.snapshot.params['id']
   };

 }

 onSubmitTask(){
   this.task.name = this.taskForm.value.name;
   this.task.description = this.taskForm.value.description;
   this.task.dateStarted = new Date(this.taskForm.value.dateStarted);
   this.task.hour = this.taskForm.value.hour;
   this.task.etapeId = this.etapeId.id;

   this.projectService.newTask(this.task);

   this.router.navigate(['projects', this.etapeId.id, 'etape-details']);

 }

}