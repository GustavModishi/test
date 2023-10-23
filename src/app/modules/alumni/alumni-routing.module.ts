import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniDashboardComponent } from './pages/alumni-dashboard/alumni-dashboard.component';
import { MyNetworkComponent } from './pages/my-network/my-network.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EventsComponent } from './pages/events/events.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { JobListingsComponent } from './pages/job-listings/job-listings.component';

const routes: Routes = [
  {
    path: '',
    component: AlumniDashboardComponent,
    children: [
      { path: 'my-network', component: MyNetworkComponent },
      { path: 'profile', component: ProfileComponent},
      { path: 'events', component: EventsComponent},
      { path: 'notifications', component: NotificationsComponent},
      { path: 'job-listings', component: JobListingsComponent},
      { path: '', redirectTo: '/alumni/my-network', pathMatch: 'full'}

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
