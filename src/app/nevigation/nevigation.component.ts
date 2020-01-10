import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-nevigation',
  templateUrl: './nevigation.component.html',
  styleUrls: ['./nevigation.component.css']
})
export class NevigationComponent implements OnInit {

  menu:any;
  datbase='menu';
  menuOpen:boolean;

  constructor(private auth:AuthenticationService,private config:ConfigService) { }

  ngOnInit() {
    this.getMenu(this.datbase);
    this.menuOpen=false;
  }

  getMenu(db:string){
    this.config.getSettings(db).subscribe(
      (settings)=>{this.menu=settings;}
    );
  }

  toggleMenu(state:boolean){
    this.menuOpen=state;
  }
  
}
