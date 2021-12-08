import { Component, OnInit } from '@angular/core';
//new
import { Team } from '../teams';
import { AppService } from '../app.service'; 

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Retrive URL parameters (team selected)
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const teamKey = urlParams.get('id')
const teamId = urlParams.get('tID')
const teamFN = urlParams.get('tFN')
const teamId2 = parseInt(""+ teamId);
console.log("Team Key: " + teamKey);
console.log("Team ID: " + teamId2);
console.log("Team FN: " + teamFN);

//

@Component({  
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  clickedTeam:Team = {
    id:teamId2,
    name:"" + teamFN,
    count:0
  };
  moddedTeam:Team = {
    id: teamId2,
    name:"" + teamFN,
    count: 0
  };

  MakeTeam(clickedTeam : Team): void {
    console.log(clickedTeam);
    this.teamService.CreateTeam(clickedTeam)
    .subscribe(data => {
      console.log(data)
      window.location.href = '/teams';
    })
  }

  incrementTeam (moddedTeam : Team): void {
    moddedTeam.count ++;
    this.teamService.updateTeamCount(moddedTeam.id, moddedTeam.count)
    .subscribe(team => moddedTeam = team);
  }

  saveTeam (moddedTeam : Team): void {
    this.teamService.updateTeam(moddedTeam.id, moddedTeam)
    .subscribe(team => moddedTeam = team);
  }

  constructor(private teamService: AppService) {}

  ngOnInit(): void {
    this.MakeTeam(this.clickedTeam);
    this.incrementTeam(this.moddedTeam);
    this.saveTeam(this.moddedTeam);
  }

  ngAfterContentChecked(): void {
    //this.incrementTeam(this.moddedTeam);
  }
}
