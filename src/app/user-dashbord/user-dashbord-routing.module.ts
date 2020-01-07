import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const routes: Routes = [
  {path:'',component:UserDashbordComponent},
  {path:'User-edit/:id',component:UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashbordRoutingModule { }
