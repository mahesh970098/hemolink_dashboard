import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { HomeComponent } from './components/Dashboard/home/home.component';
import { ProfileComponent } from './components/Dashboard/profile/profile.component';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { BloodbankComponent } from './components/Dashboard/bloodbank/bloodbank.component';
import { EventsComponent } from './components/Dashboard/events/events.component'
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/Dashboard/post/post.component';
import { SucessComponent } from './components/Dashboard/sucess/sucess.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    BloodbankComponent,
    EventsComponent,
    PostComponent,
    SucessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
