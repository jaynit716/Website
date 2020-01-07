import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  galleryData:{
    id:string,
    tagline:string,
    title:string,
    description:string
  };
  
  images:{
    id:number,
    name:string
  }[];
  
  constructor(private config:ConfigService) { }

  ngOnInit() {
  this.getGalleryData();
  this.getImages();
  }

  getGalleryData(){
    this.config.getSettings('pages','gallery').subscribe(
      data=>{
        this.galleryData=data;
      }
    );
  }

  getImages(){
    this.config.getSettings('images').subscribe(
      data=>{
        this.images=data;
      }
    );
  }
}
