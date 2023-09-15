import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MedicsRegisterComponent } from './medics-register/medics-register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedicsListComponent } from './medics-list/medics-list.component';
import { ConsultationsListComponent } from './consultation-list/consultation-list.component';
import { ConsultationsRegisterComponent } from './consultation-register/consultation-register.component';
import { ExamsListComponent } from './exam-list/exam-list.component';
import { ExamsRegisterComponent } from './exam-register/exam-register.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserInfoComponent,
    MedicsRegisterComponent,
    NavbarComponent,
    MedicsListComponent,
    ConsultationsListComponent,
    ConsultationsRegisterComponent,
    ExamsListComponent,
    ExamsRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
