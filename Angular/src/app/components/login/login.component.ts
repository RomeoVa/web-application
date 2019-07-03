import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public activeLang:string;

  @Output() TranslateEvent = new EventEmitter<string>();

  constructor(){
    }

  ngOnInit() {

  }

  Lenguaje(lang) {
    this.activeLang = lang;
    this.TranslateEvent.emit(this.activeLang);
  }

}
