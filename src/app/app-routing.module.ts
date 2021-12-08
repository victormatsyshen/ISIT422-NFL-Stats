import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TeamsComponent } from './teams/teams.component';
import { HighestTeamComponent } from './highest-team/highest-team.component';
import { StreamComponent } from './stream/stream.component';


const appRoutes: Routes = [
  {
    path: 'teams', 
    component: TeamsComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'highest',
    component: HighestTeamComponent
  },
  {
    path: 'stream',
    component: StreamComponent
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
