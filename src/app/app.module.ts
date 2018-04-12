import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpService} from './http/http.service';
import {AuthService} from './auth/auth.service';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { CreateUserService } from './service/create-user.service';
import { GetUserDataService } from './service/get-user-data.service';
import { GetUsersService } from './service/get-users.service';
import { UserTableComponent } from './user-table/user-table.component';
import { SearchService } from './service/search.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent},
    { path: 'user-table', component: UserTableComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
          {enableTracing: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService,
              AuthService,
              CreateUserService,
              GetUserDataService,
              GetUsersService,
              SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
