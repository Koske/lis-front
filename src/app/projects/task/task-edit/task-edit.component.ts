import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from "../../../service/project.service";
import { ParticipantService } from "../../../service/participant.service";


@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {

  @ViewChild('f') taskForm: NgForm;
  constructor(private projectService: ProjectService,
  			      private route: ActivatedRoute,
  			      private participantService: ParticipantService,
              private router: Router) { }
   taskId = {
   id: 0
  }
  task: any;
  etapeId: any;
  participants: any[] = [];
  taskSend = {
   name: '',
   description: '',
   hour: 0,
   participant: 0,
   start: new Date(),
   id: 0
 }
 participant: any;
 partParts: any;
 partUser: any;
 participantId: any;
 partName: any;
  ngOnInit() {
  	this.taskId = {
     id: this.route.snapshot.params['id']
   };
	this.participantService.getParticipantForTask(this.taskId.id).subscribe(
		(response: any) => {

			this.participant = response.participant;
			this.partUser = response.participant.user;
			this.partName = this.partUser.first_name+ " " +this.partUser.last_name;
			console.log(this.partName);
			this.participantId = response.participant.id;
			this.partParts = response.participant;
			
		});
  	this.projectService.getTaskById(this.taskId.id).subscribe((response: any) => {
  		this.task = response;
  		this.etapeId = this.task.task.etape.id;
  		this.participantService.getParticipantsForProject(this.etapeId)
	       .subscribe((response: any) => {
	         this.participants = response.participants;
	         console.log(this.partParts);

	         // for(let p of response.participants){
	         // 	if(p.id!= this.participant.id){
	         // 		this.participants.push(p);
	         // 	}
	         
	         // }
	         console.log(this.partUser );
	         console.log(this.participants);
	         this.editFields();
     });
  	});

  	
  }

  editFields(){
  	var rese = this.task.task.start.slice(0, 10);
  	this.taskForm.setValue({
  		name: this.task.task.name,
  		description: this.task.task.description,
  		start: rese,
  		participant: this.participantId,
  		hour: this.task.task.hour,
  	});
  }

  onSubmit(){
  	   this.taskSend.name = this.taskForm.value.name;
  	   this.taskSend.description = this.taskForm.value.description;
  	   this.taskSend.start = new Date(this.taskForm.value.start);
  	   this.taskSend.hour = this.taskForm.value.hour;
  	   this.taskSend.participant = this.taskForm.value.participant;
  	   this.taskSend.id = this.taskId.id;
  	   this.projectService.editTask(this.taskSend);

	     this.router.navigate(['/projects', this.taskId.id, 'task-details']);
  }

}
