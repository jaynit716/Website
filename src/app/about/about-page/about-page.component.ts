import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  aboutData:{
    id:string,
    tagline:string,
    title: string,
    description: string
  };

  features:{
    id:number,
    icon:string,
    name: string,
    info: string,
    delay:string
  }[];

  

  constructor(private config:ConfigService) { }

  ngOnInit() {
  this.getAboutData();
  this.getFeatures();
  }

  getAboutData(){
    this.config.getSettings('pages','about').subscribe(
      data=>{this.aboutData=data;}
    );
  }

  
  getFeatures(){
    this.config.getSettings('features').subscribe(
      data=>{this.features=data;}
    );
  }


}
