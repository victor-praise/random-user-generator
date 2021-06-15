import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  search;
  constructor(private apiCall:ApiCallService, private router:Router) {

  }

  // function determines which type of user is viewed, defaults to all users

  displayUser=(usertype)=>{
    switch (usertype) {
      case 0:
      this.router.navigate(['dashboard/users', 'allUsers'])
      break;

      case 1:
        this.router.navigate(['dashboard/users', 'femaleUsers'])
        break;

      case 2:
        this.router.navigate(['dashboard/users', 'maleUsers'])
        break;

      default:
        break;
    }
  }



  ngOnInit(): void {
  }



}
