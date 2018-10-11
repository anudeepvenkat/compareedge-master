import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MappingComponent } from './mapping/mapping.component';
import { PayDataModule } from './pay-data/pay-data.module';
import { AlertComponent } from './_directives';
import { RegisterComponent } from './register';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './_guards';
import { AlertService, AuthenticationService, UserService } from './_services';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { EmployeeDataModule } from './employee-data/employee-data.module';
import { MappingModule } from './mapping/mapping.module';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    PayDataModule,
    HttpClientModule,
    ReactiveFormsModule,
    EmployeeDataModule,
    MappingModule
  ],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
