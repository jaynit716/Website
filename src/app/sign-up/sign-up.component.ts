import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup;
  file:any;
  constructor(private fb:FormBuilder, private auth:AuthenticationService,private router:Router,private api:ApiCallService) { }

  ngOnInit() {
    this.signUpForm= this.fb.group({
      'fName':[null,Validators.required],
      'lName':[null,Validators.required],
      'email':[null,[Validators.required,Validators.email]],
      'pass':[null,[Validators.required,Validators.minLength(8)]],
      'bio':[null,Validators.required],
      'role':[null,Validators.required],
      image:[''],
      
    });
  }

  signUp(){

    const formData= new FormData();
    
    formData.append('fName',this.signUpForm.controls.fName.value);
    formData.append('lName',this.signUpForm.controls.lName.value);
    formData.append('email',this.signUpForm.controls.email.value);
    formData.append('pass',this.signUpForm.controls.pass.value);
    formData.append('bio',this.signUpForm.controls.bio.value);
    formData.append('role',this.signUpForm.controls.role.value);
    formData.append('image',this.signUpForm.get('image').value,this.file.name);
    console.log(formData);
    return this.api.addUser(formData).subscribe(
      (user)=> {
        this.router.navigate(['LogIn']);
      }
    );
  }

  onSelected(event){
    if(event.target.files.length>0){
      this.file = event.target.files[0];
      this.signUpForm.get('image').setValue(this.file);
    }
  }
}
