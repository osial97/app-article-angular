import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material.module';
import { EditUsernameComponent } from './components/edit-username/edit-username.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditPasswordComponent } from './components/edit-password/edit-password.component';
import { EditNomepennaComponent } from './components/edit-nomepenna/edit-nomepenna.component';
import { FormArticoloComponent } from '../article/form-articolo/form-articolo.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EditUsernameComponent,
    EditPasswordComponent,
    EditNomepennaComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
