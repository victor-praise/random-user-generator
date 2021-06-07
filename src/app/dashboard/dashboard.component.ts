import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  seed;
  pageNo=0;
  constructor(private apiCall:ApiCallService) { }

  Next(){
    this.pageNo+=1;
    console.log(this.pageNo);

    this.apiCall.getPagination(this.seed,this.pageNo).subscribe(
      res=>{
        console.log('pagination response',res);

      }
    )

  }

  Previous(){
    this.pageNo-=1;
    console.log(this.pageNo);
    this.apiCall.getPagination(this.seed, this.pageNo).subscribe(
      res => {
        console.log('pagination response previous', res);

      }
    )


  }

  ngOnInit(): void {
    this.apiCall.getUser().subscribe(
      res=>{
        this.seed = res.info.seed;
        console.log(res);

      }
    )
    this.apiCall.getFemaleUsers().subscribe(
      res=>{
        console.log('female', res);

      }
    )

  }

}
