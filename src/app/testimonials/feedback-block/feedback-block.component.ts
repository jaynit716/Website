import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feedback-block',
  templateUrl: './feedback-block.component.html',
  styleUrls: ['./feedback-block.component.css']
})
export class FeedbackBlockComponent implements OnInit {

@Input() feedback:{
  id:number,
  name:string,
  pic:string,
  comment:string,
  company:string
};

  constructor() { }

  ngOnInit() {
  }

}
