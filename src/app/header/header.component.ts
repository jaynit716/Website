import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterContentChecked {

  profileImage:any;
  isLoggedIn:boolean;
  user:any;
  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn=this.auth.isLoggedIn();
    this.getUser();
  }

  ngAfterContentChecked(){
    of(this.auth.isLoggedIn()).subscribe(
      ()=> {this.getUser();}
    );
  }
  getUser(){
    this.user= JSON.parse(localStorage.getItem('currentUser'));
    if(this.user){
      this.profileImage=this.user.image;
    }
    else{
      this.profileImage='default-user.png'
    }

  }

}
