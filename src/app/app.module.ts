import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http/http.service';
import { AuthService } from './auth/auth.service';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { CreateUserService } from './service/create-user.service';
import { GetUserDataService } from './service/get-user-data.service';
import { GetUsersService } from './service/get-users.service';
import { UserTableComponent } from './user-table/user-table.component';
import { SearchService } from './service/search.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserService } from './service/edit-user.service';
import { CheckInService } from './service/check-in.service';
import { CheckOutService } from './service/check-out.service';
import { UserIsCheckedInService } from './service/user-is-checked-in.service';
import { DeleteUserService } from './service/delete-user.service';
import { ProjectsComponent } from './projects/projects.component';
import { EditprojectsComponent } from './projects/editprojects/editprojects.component';
import { EtapeComponent } from './projects/etape/etape.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { TaskComponent } from './projects/task/task.component';
import { EtapeDetailsComponent } from './projects/etape/etape-details/etape-details.component';
import { TaskDetailsComponent } from './projects/task/task-details/task-details.component';
import { ProjectService } from './service/project.service';
import { ParticipantService } from './service/participant.service';
import { PresenceService } from './service/presence.service';
import { DatePipe } from '@angular/common';
import { TaskEditComponent } from './projects/task/task-edit/task-edit.component';
import { EditEtapeComponent } from './projects/etape/edit-etape/edit-etape.component';
import { ReportComponent } from './report/report.component';
import { ReportService } from './service/report.service';
import { MonthlyReportComponent } from './report/monthly-report/monthly-report.component';
import { EditPresenceComponent } from './edit-presence/edit-presence.component';
import { EditPresenceReportComponent } from './edit-presence/edit-presence-report/edit-presence-report.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent},
    { path: 'user-table', component: UserTableComponent},
    { path: 'edit-user/:id', component: EditUserComponent},
    { path: 'new-project', component: NewProjectComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'projects/:id/edit', component: EditprojectsComponent },
    { path: 'projects/:id/details', component: ProjectDetailsComponent },
    { path: 'projects/:id/etape', component: EtapeComponent },
    { path: 'projects/:id/task', component: TaskComponent },
    { path: 'projects/:id/task-details', component: TaskDetailsComponent },
    { path: 'projects/:id/etape-details', component: EtapeDetailsComponent },
    { path: 'projects/:id/edit-task', component: TaskEditComponent },
    { path: 'projects/:id/edit-etape', component: EditEtapeComponent },
    { path: 'report/:id', component: ReportComponent },
    { path: 'report/:id/:month/:year', component: MonthlyReportComponent },
    { path: 'edit-presence', component: EditPresenceComponent },
    { path: 'edit-presence-report/:id', component: EditPresenceReportComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    UserTableComponent,
    EditUserComponent,
    ProjectsComponent,
    EditprojectsComponent,
    EtapeComponent,
    NewProjectComponent,
    ProjectDetailsComponent,
    TaskComponent,
    EtapeDetailsComponent,
    TaskDetailsComponent,
    TaskEditComponent,
    EditEtapeComponent,
    ReportComponent,
    MonthlyReportComponent,
    EditPresenceComponent,
    EditPresenceReportComponent
    
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
              SearchService,
              EditUserService,
              CheckInService,
              CheckOutService,
              UserIsCheckedInService,
              DeleteUserService,
              ProjectService,
              DatePipe,
              ParticipantService,
              ReportService,
              PresenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
