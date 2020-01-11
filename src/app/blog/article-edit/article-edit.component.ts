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

  selectedImage:any;
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
      'articleText':[null,Validators.required],
      file:['']
      
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
            articleText:post.articleText,
            file:post.file
          }
        );}
    );}

  updatePost(fdata:NgForm,id:number){

    if(this.selectedImage!=null){

      const formData= new FormData();
      formData.append('title',this.postEditForm.controls.title.value);
      formData.append('author',this.postEditForm.controls.author.value);
      formData.append('date',this.postEditForm.controls.date.value);
      formData.append('pic',this.postEditForm.controls.pic.value);
      formData.append('summary',this.postEditForm.controls.summary.value);
      formData.append('articleText',this.postEditForm.controls.articleText.value);
      formData.append('file',this.postEditForm.get('file').value);
      this.api.updatePost(formData,id).subscribe(
        () => {
          this.goBack();
        }
      );
    }
    else{
      this.api.updatePostByFormData(fdata,id).subscribe(
        () => this.goBack()
      );
      }
  }

  onSelected(event){
    if(event.target.files.length>0){
      this.selectedImage = event.target.files[0];
      this.postEditForm.controls.pic.setValue(this.selectedImage.name);
      this.postEditForm.get('file').setValue(this.selectedImage);
    }
  }

  goBack(){
    this.location.back();
  }

}
