import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditUsernameComponent } from './components/edit-username/edit-username.component';
import { utentiResolver } from './resolvers/utenti.resolver';
import { EditPasswordComponent } from './components/edit-password/edit-password.component';
import { EditNomepennaComponent } from './components/edit-nomepenna/edit-nomepenna.component';
const routesArticle: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'editusername',
        component: EditUsernameComponent,
      },
      {
        path: 'editpassword',
        component: EditPasswordComponent,
      },
      {
        path: 'editnomepenna',
        component: EditNomepennaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routesArticle)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
