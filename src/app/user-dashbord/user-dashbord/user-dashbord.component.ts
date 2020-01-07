import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';
@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.css']
})
export class UserDashbordComponent implements OnInit {

user:any;
isLoggedIn:boolean;

  constructor(private router:Router,private api:ApiCallService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
      if(localStorage.getItem('currentUser')){
        this.user=JSON.parse(localStorage.getItem('currentUser'));
        this.isLoggedIn=true;
      }
  }

  logOut(){
    localStorage.removeItem('currentUser');
    this.isLoggedIn=false;
    this.router.navigate(['/Home']);
  }

  DeleteAccount(id:number){

    this.api.deleteUser(id).subscribe(
      ()=>{this.logOut();}
    );
  }

}
