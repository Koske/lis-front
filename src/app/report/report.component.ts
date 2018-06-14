import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';
import { ReportService } from "../service/report.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private datePipe: DatePipe,
      			  private route: ActivatedRoute,
      			  private reportService: ReportService,
      			  private router: Router) { }

  currentYear: any;
  currentMonth= "";
  userId: any;
  firstName: any;
  lastName: any;
  mrs: String;
  info: any;

  ngOnInit() {
  	this.userId = {
     id: this.route.snapshot.params['id']
   };
  	this.currentYear = this.datePipe.transform(new Date(), "y");
  	this.currentMonth = this.datePipe.transform(new Date(), "m");

  	this.reportService.getInitialInfo(this.userId, this.currentYear, this.currentMonth).subscribe((response: any) => {
  		this.firstName = response.user.first_name;
  		this.lastName = response.user.last_name;
  		this.info = response;
  		console.log(response);
  	});
  }

  minusYear(){
  	this.currentYear--;

  	this.reportService.getInitialInfo(this.userId, this.currentYear, this.currentMonth).subscribe((response: any) => {
  		this.info = response;
  		console.log(response);
  	});
  }

  plusYear(){
  	this.currentYear++;

  	this.reportService.getInitialInfo(this.userId, this.currentYear, this.currentMonth).subscribe((response: any) => {
  		this.info = response;
  		console.log(response);
  	});
  }

  onJan(){
    this.router.navigate(['/report', this.userId.id, 1, this.currentYear]);
  }
  onFeb(){
    this.router.navigate(['/report', this.userId.id, 2, this.currentYear]);
  }
  onMar(){
    this.router.navigate(['/report', this.userId.id, 3, this.currentYear]);
  }
  onApr(){
    this.router.navigate(['/report', this.userId.id, 4, this.currentYear]);
  }
  onMay(){
    this.router.navigate(['/report', this.userId.id, 5, this.currentYear]);
  }
  onJun(){
    this.router.navigate(['/report', this.userId.id, 6, this.currentYear]);
  }
  onJul(){
    this.router.navigate(['/report', this.userId.id, 7, this.currentYear]);
  }
  onAug(){
    this.router.navigate(['/report', this.userId.id, 8, this.currentYear]);
  }
  onSep(){
    this.router.navigate(['/report', this.userId.id, 9, this.currentYear]);
  }
  onOct(){
    this.router.navigate(['/report', this.userId.id, 10, this.currentYear]);
  }
  onNov(){
    this.router.navigate(['/report', this.userId.id, 11, this.currentYear]);
  }
  onDec(){
    this.router.navigate(['/report', this.userId.id, 12, this.currentYear]);
  }


}
