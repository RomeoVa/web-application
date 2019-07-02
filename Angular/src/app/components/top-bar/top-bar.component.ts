import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  public activeLang = 'es';
  isCollapsed = false;

  @Output() Collapsing = new EventEmitter<boolean>();

  constructor( private translate: TranslateService){
    	this.translate.setDefaultLang(this.activeLang);
  	}

  ngOnInit() {

  }

  Collapse(){
    this.isCollapsed = !this.isCollapsed;
    this.Collapsing.emit(this.isCollapsed);
  }

  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }


}
