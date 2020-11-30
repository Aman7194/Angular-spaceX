import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  launches=[];
  regularDistribution=100/4;

  constructor(private http: HttpClient,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.http.get('https://api.spaceXdata.com/v3/launches?limit=100').
    subscribe((resData)=> {
      console.log(resData);
      this.launches.push(resData);
      console.log(this.launches);
    });
  }

  Onlaunch()
  {
    this.router.navigate(['/launch'],{relativeTo: this.route});
  }

}
