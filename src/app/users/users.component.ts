import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  custom: string = 'custom';
  dataArray = [];
  pageNumber:number = 1;
  search:string;
  singleUser;
  userType:string;
  apiError;
  country:boolean=true;


  constructor(private apiCall: ApiCallService, private router: Router, private route: ActivatedRoute, private spinner: NgxSpinnerService) {
    this.route.params.subscribe(params => {
      switch (params.usertype) {
        case 'allUsers':
        this.displayAllUsers();
          break;

        case 'femaleUsers':
          this.displayFemaleUsers();
          break;

        case 'maleUsers':
          this.displayMaleUsers();
          break;

        default:
          break;
      }
    });



  }
  // displays all users
  displayAllUsers=()=>{
    this.spinner.show();
    this.apiCall.getUser().subscribe(
      res => {
        this.dataArray = res.results;
        this.userType = 'All Users';
        this.spinner.hide();
        console.log(res.results);

      },
      err=>{
        this.apiError=err;
      }
    )
  }

  // displays only male users
  displayMaleUsers=()=>{
    this.spinner.show();
    this.apiCall.getMaleUsers().subscribe(
      res => {
        this.dataArray = res.results;
        this.userType = 'Male Users';
        this.spinner.hide();
      },
      err => {
        this.apiError = err;
      }
    )
  }

  // // displays only female users
  displayFemaleUsers=()=>{
    this.spinner.show();
    this.apiCall.getFemaleUsers().subscribe(
      res => {
        this.dataArray = res.results;
        this.userType = 'Female Users';
        this.spinner.hide();
      },
      err => {
        this.apiError = err;
      }
    )
  }


  // filters array of users for particular user clicked and stores data to localstorage
  dynamicUser = (email) => {
    this.singleUser = this.dataArray.filter(user => email == user.email);
     localStorage.setItem('user', JSON.stringify(this.singleUser));
    this.router.navigate(['dashboard/user', this.singleUser[0].name.first])
  }


// toggles users country
  showCountry(){
    this.country = !this.country;
  }

  ngOnInit(): void {

  }

}
