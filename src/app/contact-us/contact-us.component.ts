import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private api:ApiCallService) { }

  ngOnInit() {
    this.contactUsForm= this.fb.group({
      'fName':[null,Validators.required],
      'lName':[null,Validators.required],
      'email':[null,[Validators.required,Validators.email]],
      'message':[null,[Validators.required,Validators.minLength(15)]]
    });
  
  }

  contactUs(formData:NgForm){
    
    this.api.postfeedback(formData).subscribe(
      res =>{
        this.cancel();
        alert("We got your query!! Thanks.");
      },
      err => {
          alert("error in sending msg");
      }
    );
  }

  cancel(){
  this.router.navigate([{outlets:{popup:null}}]);
  }


}
