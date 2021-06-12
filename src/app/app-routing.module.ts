import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent,children:[
    { path: 'user/:data', component: ViewUserComponent },
    {path:'users/:usertype', component:UsersComponent},
    { path: '', pathMatch: 'full', redirectTo: 'users/' },

  ]},

  {path:'', pathMatch:'full', redirectTo:'dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
