import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CreateUserService} from '../service/create-user.service';
import { GetUserDataService } from '../service/get-user-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userData: any;

  constructor(private createUser: CreateUserService,
              private service: GetUserDataService) { }

  ngOnInit() {

    this.service.getUserData().subscribe(data => {
      console.log(data);
      this.userData = data;
    });
  }

  onCreateUser(form: NgForm) {
    console.log(form.value)
    this.createUser.register(form.value);
  }

}