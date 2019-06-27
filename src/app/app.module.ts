import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxAsideModule } from 'ngx-aside';

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
import { TablaFacturasComponent } from './components/tabla-facturas/tabla-facturas.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { FacturaComponent } from './components/factura/factura.component';
import { GenerarFacturaComponent } from './components/generar-factura/generar-factura.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'factura',
        component: FacturaComponent
      },
      {
        path: 'generar-factura',
        component: GenerarFacturaComponent
      },{
          path: 'registro-empresa',
          component: RegistroEmpresaComponent
      },{
          path: 'registro-clientes',
          component: RegistroClientesComponent
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
    RegistroEmpresaComponent,
    TablaFacturasComponent,
    TablaClientesComponent,
    FacturaComponent,
    GenerarFacturaComponent,
    ChartPieComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule,
    ChartsModule,
    TooltipModule.forRoot(),
    NgxAsideModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule
  ],
  exports:[RouterModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
