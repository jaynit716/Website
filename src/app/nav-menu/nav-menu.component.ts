import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {


@Input() menu:any;
@Input() menuOpen:boolean;
@Output() toggleMenu:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  closeNav(){
    this.toggleMenu.emit(!this.menuOpen);
  }

}
