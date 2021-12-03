import { Component, OnInit } from '@angular/core';

import { Team } from '../teams';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  
  clickedTeam:Team = {
    id:59,
    name:"The Buks",
    count:90
  };
  moddedTeam:Team = {
    id: 59,
    name:"The Buks",
    count: 91
  };
  
  
  MakeTeam(clickedTeam : Team): void {
    console.log(clickedTeam);
    this.teamService.CreateTeam(clickedTeam)
    .subscribe(data => {
      console.log(data)
      window.location.href = '/teams';
    })

    
  }

  saveTeam (moddedTeam : Team): void {
    this.teamService.updateTeam(moddedTeam.id, moddedTeam)
    .subscribe(team => moddedTeam = team);
  }
  

  constructor(private teamService: AppService) {}

  ngOnInit(): void {
    //this.MakeTeam(this.clickedTeam);
    this.saveTeam(this.moddedTeam);
  }

}
