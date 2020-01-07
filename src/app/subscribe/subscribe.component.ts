import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribeForm:FormGroup;

  constructor(private fb:FormBuilder, private router:Router,private api:ApiCallService) { }
  ngOnInit() {
    this.subscribeForm= this.fb.group({
      'email':[null,[Validators.required,Validators.email]],
    });
    
  }

  subscribe(formData:NgForm){
    let email=this.subscribeForm.controls.email.value;
    this.isSubscribed(email,formData);
  }

  cancel(){
  this.router.navigate([{outlets:{popup:null}}]);
  }

  isSubscribed(email:string,formData:NgForm){
  
    this.api.checkSubscription(email).subscribe(
      res => {
        if(res==null){
          this.api.postSubscriber(formData).subscribe(
            res =>{
              this.cancel();
              alert("Thanks for subscription!!");
            }
          );
        }
        else if(email==res.email){
          this.cancel();
          alert("you already subscribed!!");
        }
        else{
          alert("Error: 505 Server is down!! ");
        }
      }
    );
  }

}
