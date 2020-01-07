import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-blocks',
  templateUrl: './pricing-blocks.component.html',
  styleUrls: ['./pricing-blocks.component.css']
})
export class PricingBlocksComponent implements OnInit {

  @Input() plan:{
    id:number,
    title:string,
    subTitle:string,
    rate:string,
    info:string,
    downloads:string,
    extension:string,
    tutorial:string,
    support:string,
    update:string,
    buttonText:string,
    buttonLink:string
  };
  constructor() { }

  ngOnInit() {
  }

}
