import { Component, OnInit } from '@angular/core';
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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Team Constructors
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//declare function testFunction(teamName: any, teamID: any, teamFN: any): any;
export function Abc()
{
  console.log(teamFN);
}



@Component({  
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})

export class TeamsComponent implements OnInit {

  // clickedTeam:Team = {
  //   id:teamId2,
  //   name:"" + teamFN,
  //   count:0
  // };
  // moddedTeam:Team = {
  //   id: teamId2,
  //   name:"" + teamFN,
  //   count:0
  // };

  // MakeTeam(clickedTeam : Team): void {
  //   this.teamService.CreateTeam(clickedTeam)
  //   .subscribe(data => {
  //     console.log(data)
  //     window.location.href = '/teams?id='+teamKey+'&tID='+teamId2+'&tFN='+teamFN;
  //   })
  // }

  // incrementTeam (moddedTeam : Team): void {
  //   moddedTeam.count++;
  //   console.log("updated count "+ moddedTeam.count)
  //   this.teamService.updateTeamCount(moddedTeam.id, moddedTeam)
  //   .subscribe(team => moddedTeam = team);
  // }

  // saveTeam (moddedTeam : Team): void {
  //   this.teamService.updateTeam(moddedTeam.id, moddedTeam)
  //   .subscribe(team => moddedTeam = team);
  // }

  constructor(private teamService: AppService) {}

  ngOnInit(): void {
  //  this.MakeTeam(this.clickedTeam);
   // this.incrementTeam(this.moddedTeam);
    //this.saveTeam(this.moddedTeam);
  }

  // TestFunction(): void {
  //   this.incrementTeam(this.moddedTeam);
  // }
  
}

