import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientsPageComponent } from './clients-page/clients-page.component';
import { CompanyBlocksComponent } from './company-blocks/company-blocks.component';


@NgModule({
  declarations: [ClientsPageComponent, CompanyBlocksComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  exports:[
    ClientsPageComponent,
    CompanyBlocksComponent
  ]
})
export class ClientModule { }
