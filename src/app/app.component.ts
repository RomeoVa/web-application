import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-application';
  isLoggedIn = false;

  leDiClick($event){
    this.isLoggedIn = true;
    console.log("click", $event);
  }

}
