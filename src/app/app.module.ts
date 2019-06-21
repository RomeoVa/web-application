import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ReporteFacturaComponent } from './components/reporte-factura/reporte-factura.component';
import { ReporteClientesComponent } from './components/reporte-clientes/reporte-clientes.component';
import { MisfacturasComponent } from './components/misfacturas/misfacturas.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroClientesComponent } from './components/registro-clientes/registro-clientes.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroEmpresaComponent } from './components/registro-empresa/registro-empresa.component';

const routes: Routes = [
    {
          path: 'menu',
          component: MenuComponent
    }
    ,{
        path: 'reporte-factura',
        component: ReporteFacturaComponent
    }
    ,{
        path: 'reporte-clientes',
        component: ReporteClientesComponent
    }
    ,{
        path: 'misfacturas',
        component: MisfacturasComponent
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
    ReporteFacturaComponent,
    ReporteClientesComponent,
    MisfacturasComponent,
    MenuComponent,
    LoginComponent,
    FooterComponent,
    RegistroClientesComponent,
    PerfilComponent,
    RegistroEmpresaComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
