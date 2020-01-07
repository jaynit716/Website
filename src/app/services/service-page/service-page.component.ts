import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  
  serviceData:{
    id:string,
    tagline: string,
    title:string,
    description: string,
    quote:string,
    author:string,
    para1:string,
    para2:string,
    image:string
  };
  constructor(private config:ConfigService) { }

  ngOnInit() {
  this.getServiceData();
  }


  getServiceData(){
    this.config.getSettings('pages','services').subscribe(
      data=>{this.serviceData=data;}
    );
  }


}
