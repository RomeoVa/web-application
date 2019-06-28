import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  collapse(){
    if (document.getElementById("accordionSidebar").style.width = "250px"){
      document.getElementById("accordionSidebar").style.width = "0px";
    }else {
      document.getElementById("accordionSidebar").style.width = "250px";
    }

  }


}
