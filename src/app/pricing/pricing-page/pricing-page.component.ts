import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrls: ['./pricing-page.component.css']
})
export class PricingPageComponent implements OnInit {

  pricingData:{
    id:string,
    tagline:string,
    title:string,
    description:string
  };
  
  plans:{
    id:number,
    title:string,
    subTitle:string,
    rate:string,
    info:string,
    downloads:string,
    extension:string,
    tutorial:string,
    support:string,
    update:string,
    buttonText:string,
    buttonLink:string
  }[];
  
  constructor(private config:ConfigService) { }

  ngOnInit() {
  this.getPricingData();
  this.getPlans();
  }

  getPricingData(){
    this.config.getSettings('pages','pricing').subscribe(
      data=>{
        this.pricingData=data;
      }
    );
  }

  getPlans(){
    this.config.getSettings('plans').subscribe(
      data=>{
        this.plans=data;
      }
    );
  }

}
