import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-application';
  isLoggedIn = false;

  leDiClick($event:any){
    this.isLoggedIn = ($event);
    console.log("click", $event);
  }

}
