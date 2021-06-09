import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent,children:[
    { path: 'user', component: ViewUserComponent },
  ]},

  {path:'', pathMatch:'full', redirectTo:'dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
