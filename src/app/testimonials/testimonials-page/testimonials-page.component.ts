import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-testimonials-page',
  templateUrl: './testimonials-page.component.html',
  styleUrls: ['./testimonials-page.component.css']
})
export class TestimonialsPageComponent implements OnInit {

  testimonialsData:{
    id:string,
    tagline:string,
    title:string,
    description:string
  };
  
  feedbacks:{
    id:number,
    name:string,
    pic:string,
    comment:string,
    company:string
  }[];
  
  constructor(private config:ConfigService) { }

  ngOnInit() {
  this.getTestimonialsData();
  this.getFeedbacks();
  }

  getTestimonialsData(){
    this.config.getSettings('pages','testimonials').subscribe(
      data=>{
        this.testimonialsData=data;
      }
    );
  }

  getFeedbacks(){
    this.config.getSettings('feedbacks').subscribe(
      data=>{
        this.feedbacks=data;
      }
    );
  }
}
