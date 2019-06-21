import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReporteFacturaComponent } from './components/reporte-factura/reporte-factura.component';
import { ReporteClientesComponent } from './components/reporte-clientes/reporte-clientes.component';
import { MisfacturasComponent } from './components/misfacturas/misfacturas.component';
import { MenuComponent } from './components/menu/menu.component';

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
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    BrowserModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
