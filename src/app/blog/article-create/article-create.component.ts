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
  file:any;
  picture:any;
  localUrl:any;
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
      'articleText':[null,Validators.required],
      file:['']
    });
    this.picture="../assets/images/gallery-images/gallery-image-1.jpg";

  }

  addPost() {

    const formData= new FormData();
    
    formData.append('title',this.postAddForm.controls.title.value);
    formData.append('author',this.postAddForm.controls.author.value);
    formData.append('date',this.postAddForm.controls.date.value);
    formData.append('pic',this.postAddForm.controls.pic.value);
    formData.append('summary',this.postAddForm.controls.summary.value);
    formData.append('articleText',this.postAddForm.controls.articleText.value);
    formData.append('file',this.postAddForm.get('file').value);

    this.api.addPost(formData).subscribe(
      post => {
        this.router.navigate([`/Blog`]);},
      err=>{
        console.log("Server connection failed.");
      }
     );
  }

  onSelected(event){
    if(event.target.files.length>0){
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.picture = event.target.result;
        }
      reader.readAsDataURL(event.target.files[0]);
      
      this.file = event.target.files[0];
      this.postAddForm.controls.pic.setValue(this.file.name);
      this.postAddForm.get('file').setValue(this.file);
    }
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
