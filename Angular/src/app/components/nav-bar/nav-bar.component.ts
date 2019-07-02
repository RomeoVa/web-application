import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
    @Input() collapseMessage: boolean;
    isCollapsed: boolean;

  constructor() { }

  ngOnInit() {
    this.isCollapsed = this.collapseMessage;
  }

  hidden = false;

  Click($event:any){
    this.hidden = ($event);
    console.log("click", $event);
  }

}
