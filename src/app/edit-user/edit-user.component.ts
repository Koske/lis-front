import { Component, OnInit } from '@angular/core';
import { GetUserDataService } from '../service/get-user-data.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userData: any;

  constructor(private service: GetUserDataService) { }

  ngOnInit() {
    this.service.getUserData().subscribe(data => {
      console.log(data);
      this.userData = data;
    });
  }

}
