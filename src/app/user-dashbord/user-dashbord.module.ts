import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashbordRoutingModule } from './user-dashbord-routing.module';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { UserProfileIconComponent } from './user-profile-icon/user-profile-icon.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserDashbordComponent, UserProfileIconComponent, UserEditComponent],
  imports: [
    CommonModule,
    UserDashbordRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    UserDashbordComponent,
    UserProfileIconComponent
  ]
})
export class UserDashbordModule { }
