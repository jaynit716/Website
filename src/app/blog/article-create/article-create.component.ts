import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, NgForm, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../config.service';
import { Location } from '@angular/common';
import { ApiCallService } from 'src/app/api-call.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  
  postAddForm:FormGroup;
  id:number;
  pics:{
    id:number,
    name:string
  }[];



    constructor(
      private fb:FormBuilder,
      private auth:AuthenticationService,
      private router:Router,
      private config:ConfigService,
      private location: Location,
      private api:ApiCallService
      ) { }
  
  ngOnInit() {
    var date = new Date();
    this.postAddForm= this.fb.group({
    
      'title':[null,Validators.required],
      'author':[this.getAuthor(),Validators.required],
      'date':[date.toDateString(),Validators.required],
      'pic':["gallery-image-1.jpg",Validators.required],
      'summary':[null,Validators.required],
      'articleText':[null,Validators.required]
      
    });
    this.getpics();
  }

  addPost(formData: NgForm) {
    console.log(this.postAddForm.controls.date.value);
    this.api.addPost(formData).subscribe(
      post => {
        this.router.navigate([`/Blog`]);},
      err=>{
        console.log("Server connection failed.");
      }
     );
  }

  getpics(){
    this.config.getSettings('images').subscribe(data=>{this.pics=data;});
  }

  goBack(){
    this.location.back();
  }

  getAuthor(){
    let fn=this.auth.getUser()['fName'];
    let ln=this.auth.getUser()['lName'];
    return (fn+" "+ln).toUpperCase();
  }
}
