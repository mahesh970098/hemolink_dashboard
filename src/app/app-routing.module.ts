import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { HomeComponent } from './components/Dashboard/home/home.component';
import { ProfileComponent } from './components/Dashboard/profile/profile.component';
import { EventsComponent } from './components/Dashboard/events/events.component';
import { BloodbankComponent } from './components/Dashboard/bloodbank/bloodbank.component';
import { PostComponent } from './components/Dashboard/post/post.component';
import { SucessComponent } from './components/Dashboard/sucess/sucess.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'events', component: EventsComponent },
      { path: 'bloodbank', component: BloodbankComponent },
      { path: 'post', component: PostComponent },
      { path: 'sucess', component: SucessComponent },
      // Add more child routes as needed
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
