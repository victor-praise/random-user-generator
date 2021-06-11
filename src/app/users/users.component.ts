import { Component, OnInit,Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnChanges {
  // @Input() userType: string;
  // @Input() dataArrays: [];
  arrayLength: any;
  custom: string = 'custom';
  dataArray = [];
  pageNumber = 1;
  search;
  singleUser;
  userType;


  viewAllUsers: boolean = true;
  viewUser: boolean = false;

  constructor(private apiCall: ApiCallService, private router: Router) {

  }

  displayUser = (usertype) => {

    switch (usertype) {
      case 0:
        this.apiCall.getUser().subscribe(
          res => {
            this.dataArray = res.results;
            console.log('all users', this.dataArray);
            this.userType = 'All Users';
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

  dynamicParameter = (email) => {
    this.viewAllUsers = false;
    this.viewUser = true;
    this.singleUser = this.dataArray.filter(user => email == user.email);
    // localStorage.setItem('user', JSON.stringify(this.singleUser));
    this.router.navigateByUrl('/dashboard/user', { state: this.singleUser });
  }


  ngOnChanges() {
    console.log('fuck');
  }

  ngOnInit(): void {
    this.displayUser(0);
    // console.log(this.userType);
    // console.log(this.dataArrays);


    //console.log(this.firstName);

  }

}
