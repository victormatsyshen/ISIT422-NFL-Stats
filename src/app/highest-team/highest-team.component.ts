import { Component, OnInit } from '@angular/core';
import { Team } from '../teams';
import { AppService } from '../app.service';

@Component({
  selector: 'app-highest-team',
  templateUrl: './highest-team.component.html',
  styleUrls: ['./highest-team.component.scss']
})
export class HighestTeamComponent implements OnInit {

  teams: Team[] = [];

  constructor(private appService: AppService) { }
  
  getTeams(): void {
    this.appService.getTeams()
    .subscribe(teams => this.teams = teams);
  }

  ngOnInit(): void {
  }

}
