import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  user
  constructor(private router: Router, private route:ActivatedRoute) {
    this.route.params.subscribe(params => console.log(params))
   }

  back=()=>{
    this.router.navigate([''])
    //this.router.navigate(['dashboard/user', this.singleUser[0].email])
  }
  ngOnInit(): void {
    this.user=history.state;
    console.log(this.user);

  }

}
