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
  dataArray = [];
  pageNumber = 1;
  search;
  singleUser;
  userType;
  viewAllUsers:boolean=true;
  viewUser:boolean=false;

  constructor(private apiCall:ApiCallService, private router:Router) {

  }

  displayUser=(usertype)=>{

    switch (usertype) {
      case 0:
      this.apiCall.getUser().subscribe(
        res=>{
          this.dataArray=res.results;
          console.log('all users',this.dataArray);

          this.userType='All Users';
        }
      )
      break;

      case 1:
        this.apiCall.getFemaleUsers().subscribe(
          res => {
            this.dataArray = res.results;
            this.userType = 'Female Users';
            console.log('female users', this.dataArray);
          }
        )
        break;

      case 2:
        this.apiCall.getMaleUsers().subscribe(
          res => {
            this.dataArray = res.results;
            this.userType = 'Male Users';
            console.log('male users', this.dataArray);
          }
        )
        break;

      default:
        break;
    }



  }

dynamicParameter = (email) =>{
  this.viewAllUsers=false;
  this.viewUser=true;
  this.singleUser = this.dataArray.filter(testing => email == testing.email);
  this.router.navigateByUrl('/dashboard/user', { state: this.singleUser });
}

  ngOnInit(): void {
    this.displayUser(0);
  }

}
