import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicePageComponent } from './service-page/service-page.component';


const routes: Routes = [
  {path:'',component:ServicePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
