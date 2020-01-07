import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { PricingBlocksComponent } from './pricing-blocks/pricing-blocks.component';


@NgModule({
  declarations: [PricingPageComponent, PricingBlocksComponent],
  imports: [
    CommonModule,
    PricingRoutingModule
  ],
  exports:[
    PricingPageComponent,
    PricingBlocksComponent
  ]
})
export class PricingModule { }
