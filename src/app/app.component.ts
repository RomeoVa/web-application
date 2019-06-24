import { Component } from '@angular/core';
import {LoginComponent as Login} from "src/app/components/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'web-application';
  isLoggedIn:any = false;


  leDiClick($event:any){
    this.isLoggedIn = ($event);
    console.log("click", $event);
  }
  logged = new Login(this.isLoggedIn);

}
