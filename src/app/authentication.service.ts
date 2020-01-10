import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl='api/Users';
  constructor(private http:HttpClient, private router:Router,private api:ApiCallService) { }


  logIn(email:string,pass:string){
    
    return this.api.getUserByEmail(email).subscribe(
      res=>{
        if(res==null){
          alert("Email does not Exist, please sign up first.");
        }
        else if(res.email==email && res.pass==pass){
          console.log(res);
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.router.navigate(["/Dashbord"]);
        }
      }
    );    
  }

  isLoggedIn(){
    if(localStorage.getItem('currentUser')){
      return true;
    }else{
      return false;
    }
  }
  getUser(){
    if(this.isLoggedIn){
      return JSON.parse(localStorage.getItem('currentUser'));
    }
    else{
      return "Author Not Found";
    }
  }

}
