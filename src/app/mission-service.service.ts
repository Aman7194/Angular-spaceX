import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionServiceService {

  constructor(private http: HttpClient) { }


  OnSuccessLaunch()
  {
   return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true')
  }

  OnSuccessLand()
  {
   return this.http.get('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true')
  }

  OnLaunchYear(value)

  {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=' +value)
 
  }


}
