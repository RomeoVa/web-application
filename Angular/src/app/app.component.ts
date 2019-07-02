import { Component} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  title = 'web-application';
  public activeLang = 'es';
  isCollapsed:boolean;

  constructor( private translate: TranslateService){
    	this.translate.setDefaultLang(this.activeLang);
  	}

  receiveCollapse($event:any){
    this.isCollapsed = $event;
    console.log(this.isCollapsed);
  }

  public cambiarLenguaje($event:any) {
    this.activeLang = $event;
    this.translate.use($event);
  }


}
