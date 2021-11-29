import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HighestTeamComponent } from './highest-team/highest-team.component';




@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    PlayersComponent,
    ScheduleComponent,
    HomeComponent,
    HighestTeamComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [



  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
