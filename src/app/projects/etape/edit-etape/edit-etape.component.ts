import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectService } from '../../../service/project.service';

@Component({
  selector: 'app-edit-etape',
  templateUrl: './edit-etape.component.html',
  styleUrls: ['./edit-etape.component.scss']
})
export class EditEtapeComponent implements OnInit {
 	@ViewChild('e') etapeForm: NgForm;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private router: Router) { }
 etapeId = {
   id: 0
 }
 etape = {
   id: 0,
   name: '',
   description: '',
   dateStarted: new Date(),
	   dateEnded: new Date()
	 }
  ngOnInit() {
  	this.etapeId = {
     id: this.route.snapshot.params['id'],
   };

   this.projectService.getEtapeById(this.etapeId.id).subscribe(
   		(response: any) => {
   			console.log(response.etape);
   			this.etapeForm.setValue({
		  		name: response.etape.name,
		  		description: response.etape.description,
		  		dateStarted: response.etape.start.substring(0, 10),
		  		dateEnded: response.etape.end.substring(0, 10)
		  	});
   		});
  }

  onSubmitEtape(){
  	this.etape.name = this.etapeForm.value.name;
  	this.etape.description = this.etapeForm.value.description;
  	this.etape.dateStarted = this.etapeForm.value.dateStarted;
  	this.etape.dateEnded = this.etapeForm.value.dateEnded;
  	this.etape.id = this.etapeId.id;
	this.projectService.editEtape(this.etape);
  	this.router.navigate(['/projects', this.etapeId.id, 'etape-details']);
  }

}
