import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private _cookieService:CookieService){}

  @Output() LoggedInEvent = new EventEmitter<boolean>();
  isLoggedIn = false;

  getCookie(key: string){
    return this._cookieService.get(key);
  }

  ngOnInit() {
  }

  enviar(){
    this.isLoggedIn = true;
    this.LoggedInEvent.emit(this.isLoggedIn);
  }

}
