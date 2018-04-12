import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../service/get-users.service';
import { GetUserDataService } from '../service/get-user-data.service';
import { SearchService } from '../service/search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  users: any;
  pages: any[] = [];

  constructor(private service: GetUsersService, private searchService: SearchService) { }

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
      console.log(data);
      for(let i = 1; i <= data.total_pages; i++){
        this.pages.push(i);
      }

      data.total_pages = this.pages;
      this.users = data;
    });
  }

  search(page, searchTerm){
    this.searchService.getSearch(this.users, page, 5, searchTerm).subscribe(data => {
      console.log(data);
      this.pages = [];
      for(let i = 1; i <= data.total_pages; i++){
        this.pages.push(i);
      }

      data.total_pages = this.pages;
      this.users = data;
    });
  }

  searchBtn(searchTerm:any){
    this.search(1,searchTerm);
  }
}