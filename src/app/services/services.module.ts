import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicePageComponent } from './service-page/service-page.component';


@NgModule({
  declarations: [ServicePageComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  exports:[
    ServicePageComponent
  ]
})
export class ServicesModule { }
