import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  user = JSON.parse(localStorage.getItem('user'));
  country = JSON.parse(localStorage.getItem('country'));
  constructor(private router: Router,) {

   }

  back=()=>{
    localStorage.clear()
    this.router.navigate(['dashboard/users', 'allUsers'])

  }
  ngOnInit(): void {
    console.log(this.user);

  }


}
