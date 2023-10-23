import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashbordComponent } from './pages/admin-dashbord/admin-dashbord.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashbordComponent,
    children: [
      
    ]
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
