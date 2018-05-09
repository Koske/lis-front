import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpService } from "../../../http/http.service";
import { ProjectService } from "../../../service/project.service";

@Component({
 selector: 'app-etape-details',
 templateUrl: './etape-details.component.html',
 styleUrls: ['./etape-details.component.scss']
})
export class EtapeDetailsComponent implements OnInit {

 constructor(private route: ActivatedRoute,
             private httpService: HttpService,
             private router: Router,
             private projectService: ProjectService) { }

 etapeId = {
   id: 0
 }
 tasks: any[] = [];

 ngOnInit() {
   this.etapeId = {
     id: this.route.snapshot.params['id']
   };

   this.projectService.getTasks()
     .subscribe((response: any) => {
       for(let el of response){
         if(el.etape.id == this.etapeId.id){
           this.tasks.push(el);

         }
       }

     });
 }
 onAddTask(){
   this.router.navigate(['/projects', this.etapeId.id, 'task']);

 }
}