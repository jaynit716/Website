import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  
  homeData:{
    id:string,
    heading:string,
    headingtext:string,
    buttontext:string,
    buttonlink:string,
    image:string
  };
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.getHomeData();
  }

  getHomeData(){
    return this.config.getSettings('pages','home').subscribe(
      settings => {this.homeData=settings;}
    );
  }

}
