import { Injectable, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppConfig } from "../../app-configuration";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpService } from "../../http/http.service";
import { Response } from '@angular/http';
import { Location } from '@angular/common';
import { ProjectService } from '../../service/project.service';
@Component({
 selector: 'app-editprojects',
 templateUrl: './editprojects.component.html',
 styleUrls: ['./editprojects.component.scss']
})

@Injectable()
export class EditprojectsComponent implements OnInit {

 @ViewChild('f') projectForm: NgForm;
 constructor(private http: HttpClient,
             private httpService: HttpService,
             private projectService: ProjectService,
             private route: ActivatedRoute,
             private router: Router) {}
 project = {
   id: 0,
   name: '',
   description: '',
   dateStarted: new Date(),
   estimatedDuration: new Date()
 }

 projectId = {
   id: 0
 }
 ai: any;
 ngOnInit() {
   this.projectId = {
     id: this.route.snapshot.params['id'],
   };
   this.project.id = this.projectId.id;
   this.projectService.getProjects()
     .subscribe((response: any) => {
       for(let el of response){
         if(el.id == this.projectId.id){
           this.ai = el;
           let strStart = this.ai.start_date;
           let ress = strStart.slice(0, 10);
           let strEnd = this.ai.estimated_duration;
           let rese = strEnd.slice(0, 10);
           this.projectForm.setValue({
             name: this.ai.name,
             description: this.ai.description,
             dateStarted: ress,
             estimatedDuration: rese
           });
         }
         }
     });

 }

 onSubmit(){
   this.project.name = this.projectForm.value.name;
   this.project.description = this.projectForm.value.description;
   this.project.dateStarted = new Date(this.projectForm.value.dateStarted);
   this.project.estimatedDuration = new Date(this.projectForm.value.estimatedDuration);


   this.projectService.editProjects(this.project);


   this.router.navigate(['/projects']);

 }



}