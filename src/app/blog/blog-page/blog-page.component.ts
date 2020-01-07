import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { PagerService } from '../pager.service';
import { post } from 'src/app/post';
import { AuthenticationService } from 'src/app/authentication.service';
import { ApiCallService } from 'src/app/api-call.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  
  blogData:{
    id:string,
    tagline:string,
    title:string,
    description:string
  };
  
  allItems:post[];
  pages:any[];
  pageSize=3;
  pager:any={};

  isLoggedIn:boolean;

  constructor(private config:ConfigService,private api:ApiCallService,private pagerSevice:PagerService,private auth:AuthenticationService) { }

  ngOnInit() {
    this.getBlogData();
    this.getPost();
    this.getLogInfo();
  }

  getBlogData(){
    this.config.getSettings('pages','blog').subscribe(
      data=>{this.blogData=data;}
    );
  }

  getPost(){
    this.api.getPosts().subscribe(
      posts => {
        this.allItems=posts;
        this.setPage(1);
      }
    );
  }

  setPage(pageNum:number){
    this.pager=this.pagerSevice.getPager(this.allItems.length,pageNum,this.pageSize);

    this.pages=this.allItems.slice(this.pager.startIndex,this.pager.endIndex);
  }

  getLogInfo(){
    this.isLoggedIn=this.auth.isLoggedIn();
  }

}
