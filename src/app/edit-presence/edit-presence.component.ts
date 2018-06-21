import { Component, OnInit, ViewChild } from '@angular/core';
import { GetUsersService } from '../service/get-users.service';
import { PresenceService } from '../service/presence.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-presence',
  templateUrl: './edit-presence.component.html',
  styleUrls: ['./edit-presence.component.scss']
})
export class EditPresenceComponent implements OnInit {

  currentUser: any;
  presences: any;
  presenceId: string = 'none';
  presenceIndex: number = -1;
  time: any;
  realId: number = -1;
  type: string = 'none';
  @ViewChild('f') timeForm: NgForm;

  constructor(private getUsersService: GetUsersService,
  			  private presenceService: PresenceService) { }

  ngOnInit() {
  	this.getUsersService.getCurrentUser().subscribe((response: any) => {
  		this.currentUser = response.user;

	  	this.getPresences();
  		
  	});




  }

  stashInfo(prId, ind, type: string, realId){
   if(this.presenceId == prId){
   	 this.realId = -1;
     this.presenceId = 'none';
     this.type = 'none'
     this.presenceIndex = -1;
     let table = document.getElementById(prId);
     table.classList.toggle("active");
   }
   else if(this.presenceId!='none'){
     let id = this.presenceId.toString();
     let table = document.getElementById(id);
     table.classList.toggle("active");
     this.realId=realId;
     this.type = type;
     this.presenceId = prId;
     this.presenceIndex = ind;
     let id2 = this.presenceId.toString();
     table = document.getElementById(id2);
     table.classList.toggle("active");

   }
   else{
   	 this.realId=realId;
   	 this.type = type;
     this.presenceId = prId;
     this.presenceIndex = ind;
     let table = document.getElementById(prId);

     table.classList.toggle("active");
   }

   console.log(this.presenceId, this.presenceIndex);
 }

 onSubmit(){
 	this.time = this.timeForm.value.time;
 	this.presenceService.editPresence(this.time, this.realId, this.type);
	this.presenceId = 'none';
    this.presenceIndex = -1;
    this.type = 'none';
    this.realId = -1;
 	this.getPresences();
 }

 getPresences(){
	this.presenceService.getPresenceByUser(this.currentUser).subscribe((response: any) => {
	console.log(response.presences);

	this.presences = response.presences

	this.presences.forEach((res) => {
		res.start = res.start.substring(0, 10) + ' ' + res.start.substring(11, 16);
		res.end = res.end.substring(0, 10) + ' ' + res.end.substring(11, 16);
 
		})
	});
 }

}
