import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import {  AdminGuard, AlumniGuard, AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then((a) =>a.AdminModule),},
  {
    path: 'alumni',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/alumni/alumni.module').then((a) =>a.AlumniModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
