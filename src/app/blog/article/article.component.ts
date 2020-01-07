import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../config.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { post } from '../../post';
import { AuthenticationService } from 'src/app/authentication.service';
import { ApiCallService } from 'src/app/api-call.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  post:post;  
  isLoggedIn:boolean;
  constructor(
              private config:ConfigService,
              private api:ApiCallService,
              private ar:ActivatedRoute, 
              private loc:Location,
              private auth:AuthenticationService,
              private router:Router
              
              ) { }

  ngOnInit() {
    let id = +this.ar.snapshot.paramMap.get('id');
    this.getPostByID(id);
    this.getLogInfo();
  }

  getPostByID(id:number){
    return this.api.getPostByID(id).subscribe(
      post=>{this.post=post;}
    );
  }

  getLogInfo(){
    this.isLoggedIn=this.auth.isLoggedIn();
  }

  getBack(){
    this.loc.back();
  }

  DeleteArticle(id:number){
    console.log(id);
    this.api.deletePost(id).subscribe(
      res=>{this.router.navigate(["/Blog"]);}
    );
  }

}
