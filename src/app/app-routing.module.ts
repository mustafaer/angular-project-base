import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {LoginLayoutComponent} from './shared/layouts/login-layout/login-layout.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardLayoutComponent} from './shared/layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [{
  path: '', component: LoginLayoutComponent,
  children: [
    {
      path: '', component: LoginComponent
    },
    {
      path: 'login', component: LoginComponent
    },
  ]
},
  {
    path: 'dashboard', component: DashboardLayoutComponent,
    children: [
      {
        path: '', component: DashboardComponent, pathMatch: 'full'
      },
    ]
  },
  {
    path: '**', redirectTo: 'dashboard'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
