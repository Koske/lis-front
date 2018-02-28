import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpService} from "./http/http.service";
import {AuthService} from "./auth/auth.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes,
          {enableTracing: true}),
	  HttpClientModule
  ],
  providers: [HttpService,
              AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
