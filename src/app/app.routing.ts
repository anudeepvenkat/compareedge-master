import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDataComponent } from './employee-data/employee-data.component';
import { PayDataComponent } from './pay-data/pay-data.component';
import { MappingComponent } from './mapping/mapping.component';



const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'employeeData', component: EmployeeDataComponent },
    { path: 'payData', component: PayDataComponent },
    { path: 'mappingData', component: MappingComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);