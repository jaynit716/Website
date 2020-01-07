import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-block',
  templateUrl: './post-block.component.html',
  styleUrls: ['./post-block.component.css']
})
export class PostBlockComponent implements OnInit {


  @Input() post:any;

  constructor() { }

  ngOnInit() {
  }

}
