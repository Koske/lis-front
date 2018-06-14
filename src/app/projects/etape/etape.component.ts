import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectService } from "../../service/project.service";
import { ActivatedRoute, Router} from '@angular/router';

@Component({
 selector: 'app-etape',
 templateUrl: './etape.component.html',
 styleUrls: ['./etape.component.scss']
})
export class EtapeComponent implements OnInit {
 @ViewChild('e') etapeForm: NgForm;

 constructor(private projectService: ProjectService,
             private route: ActivatedRoute,
             private router: Router) { }
 projectId = {
   id: 0
 }
 etape = {
   projectId: 0,
   name: '',
   description: '',
   dateStarted: new Date(),
   dateEnded: new Date()
 }
 ngOnInit() {
   this.projectId = {
     id: this.route.snapshot.params['id']
   };
 }


 onSubmitEtape(){
   this.etape.name = this.etapeForm.value.name;
   this.etape.description = this.etapeForm.value.description;
   this.etape.dateStarted = new Date(this.etapeForm.value.dateStarted);
   this.etape.dateEnded = new Date(this.etapeForm.value.dateEnded);
   this.etape.projectId = this.projectId.id;

   this.projectService.newEtape(this.etape);

   this.router.navigate(['projects', this.projectId.id, 'details']);


 }

}