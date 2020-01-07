import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Observable,of} from 'rxjs';
import{catchError,map,tap} from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  apiUrl='api/Users';
  constructor(private http:HttpClient, private router:Router,private api:ApiCallService) { }

  private hendleError<T>(operation='operation',result?:T){
    return (error:any): Observable<T>=>{
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  logIn(email:string,pass:string){
    
    return this.api.getUserByEmail(email).subscribe(
      res=>{
        if(res==null){
          alert("Email does not Exist, please sign up first.");
        }
        else if(res.email==email && res.pass==pass){
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.router.navigate(["/Dashbord"]);
        }
      }
    );    
  }

  logout() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/home']);
    }
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
