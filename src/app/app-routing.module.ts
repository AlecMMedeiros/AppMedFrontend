import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MedicsRegisterComponent } from './medics-register/medics-register.component';
import { MedicsListComponent } from './medics-list/medics-list.component';
import { ConsultationsRegisterComponent } from './consultation-register/consultation-register.component';
import { ConsultationsListComponent } from './consultation-list/consultation-list.component';
import { ExamsRegisterComponent } from './exam-register/exam-register.component';
import { ExamsListComponent } from './exam-list/exam-list.component';
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'medics-register', component: MedicsRegisterComponent, canActivate: [AuthGuard] },
  { path: 'info', component: UserInfoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'medics-list', component: MedicsListComponent, canActivate: [AuthGuard] },
  { path: 'consultation-register', component: ConsultationsRegisterComponent, canActivate: [AuthGuard] },
  { path: 'consultation-list', component: ConsultationsListComponent, canActivate: [AuthGuard] },
  { path: 'exam-register', component: ExamsRegisterComponent, canActivate: [AuthGuard] },
  { path: 'exam-list', component: ExamsListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
