import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CheckInService } from '../service/check-in.service';
import { CheckOutService } from '../service/check-out.service';
import { UserIsCheckedInService } from '../service/user-is-checked-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  checkedInOut: boolean;
  user_checked: any;

  constructor(private authService: AuthService,
              private checkInService: CheckInService,
              private checkOutService: CheckOutService,
              private userIsCheckIn: UserIsCheckedInService) { }

  ngOnInit() {
    this.userIsCheckIn.userIsCheckedIn().subscribe(
      data => {
        this.user_checked = data;
        this.checkedInOut = this.user_checked.checkedIn;
      }
    );
  }

  onLogout() {
    this.authService.logout();
  }

  onCheckIn() {
    this.checkInService.checkIn().subscribe(
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

}
