import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CheckInService } from '../service/check-in.service';
import { CheckOutService } from '../service/check-out.service';
import { ProjectService } from '../service/project.service';
import { UserIsCheckedInService } from '../service/user-is-checked-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checkedInOut: boolean;
  user_checked: any;
  business_checked: boolean;
  prjNum = 0;

  constructor(private authService: AuthService,
              private checkInService: CheckInService,
              private checkOutService: CheckOutService,
              private userIsCheckIn: UserIsCheckedInService,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.business_checked = false;
    this.userIsCheckIn.userIsCheckedIn().subscribe(
      data => {
        this.user_checked = data;
        this.checkedInOut = this.user_checked.checkedIn;
      }
    );

    this.projectService.getProjects().subscribe((response: any) => {
      for(const el of response){
        this.prjNum++;
      }
    })
  }

  onLogout() {
    this.authService.logout();
  }

  onCheckIn() {
    this.checkInService.checkIn(this.business_checked).subscribe(
      data => {
        this.checkedInOut = true;
      }
    );
  }

  onCheckOut() {
    this.checkOutService.checkOut().subscribe(
      data => {
        this.checkedInOut = false;
      }
    );
  }

  onBusinessCheck() {
    if (this.business_checked) {
      this.business_checked = false;
    } else {
      this.business_checked = true;
    }
  }

}
