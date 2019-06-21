import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { Routes, RouterModule } from '@angular/router';
import { RegistroClientesComponent } from './components/registro-clientes/registro-clientes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';

const routes: Routes = [
    {
        path: 'nav-bar',
        component: NavBarComponent
    },{
        path: 'top-bar',
        component: TopBarComponent
    },{
        path: 'app-footer',
        component: FooterComponent
    },{
        path: 'Registro-Clientes',
        component: RegistroClientesComponent
    },{
        path: 'perfil',
        component: PerfilComponent
    }

];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TopBarComponent,
    FooterComponent,
    RegistroClientesComponent,
    PerfilComponent,
    RegistroEmpresaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
