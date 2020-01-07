import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../../config.service';
import { Location } from '@angular/common';
import { ApiCallService } from 'src/app/api-call.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  postEditForm:FormGroup;
  id:number;

    constructor(
      private fb:FormBuilder,
      private route:ActivatedRoute,
      private config:ConfigService,
      private location: Location,
      private api:ApiCallService
      ) { }
  
  ngOnInit() {
    this.postEditForm= this.fb.group({
      'id':[null,Validators.required],
      'title':[null,Validators.required],
      'author':[null,Validators.required],
      'date':[null,Validators.required],
      'pic':[null,Validators.required],
      'summary':[null,Validators.required],
      'articleText':[null,Validators.required]
      
    });
    this.id= this.route.snapshot.params['id'] || null;
    if(this.id){
      this.getPostById(this.id);
    }
  }

  getPostById(id:number){

    this.api.getPostByID(id).subscribe(
      post=>{
        this.postEditForm.setValue(
          {
            id:post.id,
            title:post.title,
            author:post.author,
            date:post.date,
            pic:post.pic,
            summary:post.summary,
            articleText:post.articleText
          }
        );}
    );}

  updatePost(formData:NgForm,id:number){
    console.log(id);
    this.api.updatePost(formData,id).subscribe(
      () => this.goBack()
    );
  }

  goBack(){
    this.location.back();
  }

}
