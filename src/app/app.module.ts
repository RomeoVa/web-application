import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

const routes: Routes = [
    {
        path: 'nav-bar',
        component: NavBarComponent
    },{
        path: 'top-bar',
        component: TopBarComponent
    }

];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
