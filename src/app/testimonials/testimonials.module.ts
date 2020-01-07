import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsRoutingModule } from './testimonials-routing.module';
import { TestimonialsPageComponent } from './testimonials-page/testimonials-page.component';
import { FeedbackBlockComponent } from './feedback-block/feedback-block.component';


@NgModule({
  declarations: [TestimonialsPageComponent, FeedbackBlockComponent],
  imports: [
    CommonModule,
    TestimonialsRoutingModule
  ],
  exports:[
    FeedbackBlockComponent,
    TestimonialsPageComponent
  ]
})
export class TestimonialsModule { }
