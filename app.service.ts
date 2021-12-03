import { Injectable } from '@angular/core';
import { Team } from './teams';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

//class X {
//  message: string
//}

@Injectable({
  providedIn: 'root'
})

export class AppService {

  getTeams(): Observable<Team[]> {   // an array   of them
  
    return  this.http.get<Team[]>('http://localhost:3000/teams');  
    
}

/** GET Team by id.  */
getTeam(id: number): Observable<Team> { // one of them
return this.http.get<Team>('http://localhost:3000/teams/' + id);

}

// create a new Team
CreateTeam(newTeam: Team): Observable<Team> {
return this.http.post<Team>('http://localhost:3000/teams', newTeam);
}
//updates team
updateTeam(id: number, oneTeam:Team) : Observable<Team> {
  return this.http.put<Team>('http://localhost:3000/teams/'+ id, oneTeam);
}
//deleteHero(id: number): Observable<X> {
//return this.http.delete<X>('http://localhost:3000/teams/' + id); 
//}


constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

}

