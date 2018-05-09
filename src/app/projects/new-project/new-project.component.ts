import { Injectable, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppConfig } from "../../app-configuration";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpService } from "../../http/http.service";
import { Response } from '@angular/http';
import { ProjectService } from '../../service/project.service'
import { Router} from '@angular/router';


@Component({
 selector: 'app-new-project',
 templateUrl: './new-project.component.html',
 styleUrls: ['./new-project.component.scss']
})

@Injectable()
export class NewProjectComponent implements OnInit {

 @ViewChild('f') projectForm: NgForm;
 constructor(private http: HttpClient,
             private httpService: HttpService,
             private projectService: ProjectService,
             private router: Router) {}

 project = {
   name: '',
   description: '',
   dateStarted: new Date(),
   estimatedDuration: new Date()
 }

 ngOnInit() {
 }

 onSubmit(){
   this.project.name = this.projectForm.value.name;
   this.project.description = this.projectForm.value.description;
   this.project.dateStarted = new Date(this.projectForm.value.dateStarted);
   this.project.estimatedDuration = new Date(this.projectForm.value.estimatedDuration);


   this.projectService.newProject(this.project);
   this.router.navigate(['projects']);



 }

}