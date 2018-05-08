import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { GetUserDataService } from '../service/get-user-data.service';
import { ActivatedRoute } from '@angular/router';
import { EditUserService } from '../service/edit-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userData: any;
  userForEdit: any;
  userId: any;
  positionId:any;

  constructor(private service: GetUserDataService, 
              private route: ActivatedRoute,
              private updateUser: EditUserService) { }

  ngOnInit() {
    this.route.params.subscribe(id => this.userId = id);

    this.service.getUserData().subscribe(data => {
      this.userData = data;
    });   

    this.service.getUserById(this.userId).subscribe(data => {
      console.log(data['user']);
      this.userForEdit = data['user'];
    })
  }

  onEditUser(form: NgForm) {
    console.log(form.value);
    this.updateUser.edit(form.value);
  }

}
