import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

logInForm:FormGroup;
returnUrl:string;

  constructor(private fb:FormBuilder,private auth:AuthenticationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.logInForm= this.fb.group({
      'email':[null,[Validators.required,Validators.email]],
      'password':[null,[Validators.required,Validators.minLength(8)]]
    });
  }

  logIn(formData:NgForm){

    let email=this.logInForm.controls.email.value;
    let password=this.logInForm.controls.password.value;  
    this.auth.logIn(email,password);
  }

}

