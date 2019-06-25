import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn:any = true;
  Registering:any = true;
  constructor(private _cookieService:CookieService){
    this.isLoggedIn = _cookieService;
  }

  @Output() LoggedInEvent = new EventEmitter<boolean>();
  @Output() RegisteringEvent = new EventEmitter<boolean>();

  ngOnInit() {
    this._cookieService.put("test", "test");
  }

  getCookie(key: string){
    return this._cookieService.get(key);
  }

  Logged(){
    this.isLoggedIn = true;
    this.LoggedInEvent.emit(this.isLoggedIn);
  }

  Register(){
    this.Registering = true;
    this.RegisteringEvent.emit(this.Registering);
  }

}
