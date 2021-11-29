import { Component, OnInit } from '@angular/core';

import { Team } from '../teams';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  
  MakeTeam(team): Team {
    console.log(team);
    this.teamService.CreateTeam()
    .subscribe(data => {
      console.log(data)
      window.location.href = '/teams';
    })

    
  }

  saveTeam (): void {
    this,this.teamService.updateTeam(this.team.id, this.team)
    .subscribe(team => this.team = team);
  }

  constructor(private teamService: AppService) {}

  ngOnInit(): void {
  }

}
