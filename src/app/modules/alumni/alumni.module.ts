import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { MyNetworkComponent } from './pages/my-network/my-network.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlumniDashboardComponent } from './pages/alumni-dashboard/alumni-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EventsComponent } from './pages/events/events.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { JobListingsComponent } from './pages/job-listings/job-listings.component';


@NgModule({
  declarations: [
    MyNetworkComponent,
    HeaderComponent,
    FooterComponent,
    AlumniDashboardComponent,
    ProfileComponent,
    EventsComponent,
    NotificationsComponent,
    JobListingsComponent
  ],
  imports: [
    CommonModule,
    AlumniRoutingModule
  ]
})
export class AlumniModule { }
