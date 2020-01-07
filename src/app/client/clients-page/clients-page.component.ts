import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.css']
})
export class ClientsPageComponent implements OnInit {


  clientsData:{
    id:string,
    tagline:string,
    title:string,
    description:string
  };
  
  companies:{
    id:number,
    name:string,
    pic:string,
    link:string
  }[];
  
  constructor(private config:ConfigService) { }

  ngOnInit() {
  this.getClientsData();
  this.getCompanies();
  }

  getClientsData(){
    this.config.getSettings('pages','clients').subscribe(
      data=>{
        this.clientsData=data;
      }
    );
  }

  getCompanies(){
    this.config.getSettings('companies').subscribe(
      data=>{
        this.companies=data;
      }
    );
  }
}
