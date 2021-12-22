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

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  clickedTeam:Team = {
    id:teamId2,
    name:"" + teamFN,
    count:0
  };
 
  // do a service call which does a mongo call to see if record exists

  //if yes, then do this MakeTeam function call
  //if no, the you would make a call to add new team 

  MakeTeam(clickedTeam : Team): void {
    console.log("**************************************************");
    this.teamService.CreateTeam(clickedTeam)
    .subscribe(data => {
      console.log("++++++++++++++++++++++++++++++++++++++++++++++");
      console.log(data)
      window.location.href = '/teams?id='+teamKey+'&tID='+teamId2+'&tFN='+teamFN;
    })
  }


  constructor(private teamService: AppService) {}

  ngOnInit(): void {
    this.MakeTeam(this.clickedTeam);

  }


}

