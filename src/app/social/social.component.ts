import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {


  websites:{
    id:number,
    title:string,
    name:string,
    target:string,
    link:string,
    icon:string
  }[];

  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.getWebsites();
  }


  getWebsites(){
    this.config.getSettings('websites').subscribe(
      data=>{this.websites=data;}
    );
  }

}
