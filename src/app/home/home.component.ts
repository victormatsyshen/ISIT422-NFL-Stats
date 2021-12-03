import { Component, OnInit } from '@angular/core';

import { Team } from '../teams';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']  //heres where we swap the style
})
export class HomeComponent implements OnInit {
  
  MakeTeam(clickedTeam: Team): void {
    console.log("Mongo click: " + clickedTeam);
    this.teamService.CreateTeam(clickedTeam)
    .subscribe(data => {
      console.log(data)
      window.location.href = '/teams';
    })

    
  }

  saveTeam (clickedTeam : Team): void {
    this,this.teamService.updateTeam(clickedTeam.id, clickedTeam)
    .subscribe(team => clickedTeam = team);
  }

  constructor(private teamService: AppService) {}

  ngOnInit(): void {
  }

}
