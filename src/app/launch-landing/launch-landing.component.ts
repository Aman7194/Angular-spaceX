
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { MissionServiceService } from '../mission-service.service';

@Component({
  selector: 'app-launch-landing',
  templateUrl: './launch-landing.component.html',
  styleUrls: ['./launch-landing.component.css']
})
export class LaunchLandingComponent implements OnInit {

  launches1=[];
  launches2=[];
  launches=[];
  regularDistribution=100/4;
  btnvalue='';

  constructor(private router:Router,
    private service: MissionServiceService) { 
    }

  ngOnInit(): void {
  }

  OnSuccess()
  {
    this.service.OnSuccessLaunch().
    subscribe((resData)=> {
      console.log(resData);
      this.launches1.push(resData);
      console.log(this.launches1);
    });
    this.launches1=[];
  }

  OnLand()
  {
    this.service.OnSuccessLand().
    subscribe((resData)=> {
      this.launches2.push(resData);
      console.log(this.launches2);
    });
    this.launches2=[];
  }

  OnYear(value:HTMLInputElement)

  {
    // this.router.navigate(['/launch_year']);
    //this.btnvalue=value.innerHTML;
    this.service.OnLaunchYear(value.innerHTML).
    subscribe((resData)=> {
      console.log(resData);
      this.launches.push(resData);
    });
    this.launches=[];
  }

}
