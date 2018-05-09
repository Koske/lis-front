import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../service/get-users.service';
import { GetUserDataService } from '../service/get-user-data.service';
import { SearchService } from '../service/search.service';
import { Subject } from 'rxjs/Subject';
import { DeleteUserService } from '../service/delete-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users: any;
  pages: any[] = [];
  totalPages: any;
  searchPages: any;
  userId: number = -1;

  constructor(private service: GetUsersService, 
              private searchService: SearchService,
              private deleteService: DeleteUserService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.users);
    this.getAllUsers(1);
  }

  newPage(page){
    this.pages = [];
    this.getAllUsers(page);
  }

  previousPage(page) {
    this.pages = [];
    let previousPage = Number(page)-1;
    if(page-1 != 1){
      this.getAllUsers(page);
    }else if(page !=1)
    {
      this.getAllUsers(page);
    }
  }

  nextPage(page, total) {
    this.pages = [];
    let nextPage = Number(page)+1;
    if(nextPage-1 != total){
      this.getAllUsers(nextPage);
    }
  }

  getAllUsers(page){
    this.service.getUsers(this.users, page, 5).subscribe(data => {
      console.log('asdasdasdjaskjdasd');
      console.log(data);
      this.totalPages = data;
      for(let i = 1; i <= this.totalPages.total_pages; i++){
        this.pages.push(i);
      }

      this.totalPages.total_pages = this.pages;
      this.users = data;
    });
  }

  search(page, searchTerm){
    this.searchService.getSearch(this.users, page, 5, searchTerm).subscribe(data => {
      console.log(data);
      this.searchPages = data;
      this.pages = [];
      for(let i = 1; i <= this.searchPages.total_pages; i++){
        this.pages.push(i);
      }


      this.searchPages.total_pages = this.pages;
      this.users = data;
      console.log(this.users);
    });
  }

  searchBtn(searchTerm:any){
    this.search(1,searchTerm);
  }
  
  onDelete() {
    if(this.userId != -1){
      if(confirm("Are you sure to delete ")) {
        this.deleteService.deleteUser(this.userId);
      }
    }
  }

  stashInfo(userId){
    if(this.userId == userId){
      this.userId = -1;
      let table = document.getElementById(userId);
      table.classList.toggle("active");
    }
    else if(this.userId!= -1){
      let id = this.userId.toString();
      let table = document.getElementById(id);
      table.classList.toggle("active");
 
      this.userId = userId;
      let id2 = this.userId.toString();
      table = document.getElementById(id2);
      table.classList.toggle("active");
    }
    else{
      this.userId = userId;
 
      let table = document.getElementById(userId);
      table.classList.toggle("active");
    }
 
    console.log(this.userId);
  }

  onEdit(){
    if(this.userId != -1){
      this.router.navigate(['/edit-user', this.userId]);
    }
  }
}