import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  arrayLength: any;
  custom: string = 'custom';
  dataArrays = [];
  userType;
  constructor(private apiCall:ApiCallService, private router:Router) {

  }

  displayUser=(usertype)=>{

    switch (usertype) {
      case 0:
      this.apiCall.getUser().subscribe(
        res=>{
          this.dataArrays=res.results;
          this.userType='All Users';
        }
      )
      break;

      case 1:
        this.apiCall.getFemaleUsers().subscribe(
          res => {
            this.dataArrays = res.results;
            this.userType = 'Female Users';
          }
        )
        break;

      case 2:
        this.apiCall.getMaleUsers().subscribe(
          res => {
            this.dataArrays = res.results;
            this.userType = 'Male Users';
          }
        )
        break;

      default:
        break;
    }
  }



  ngOnInit(): void {
    this.displayUser(0);
  }



}
