import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public activeLang:string;
  isCollapsed = false;

  @Output() Collapsing = new EventEmitter<boolean>();
  @Output() TranslateEvent = new EventEmitter<string>();

  constructor(){
  	}

  ngOnInit() {

  }

  Collapse(){
    this.isCollapsed = !this.isCollapsed;
    this.Collapsing.emit(this.isCollapsed);
  }

  Lenguaje(lang) {
    this.activeLang = lang;
    this.TranslateEvent.emit(this.activeLang);
  }


}
