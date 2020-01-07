import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-blocks',
  templateUrl: './company-blocks.component.html',
  styleUrls: ['./company-blocks.component.css']
})
export class CompanyBlocksComponent implements OnInit {

  @Input() company:{
    id:number,
    name:string,
    pic:string,
    link:string
  };
  constructor() { }

  ngOnInit() {
  }

}
