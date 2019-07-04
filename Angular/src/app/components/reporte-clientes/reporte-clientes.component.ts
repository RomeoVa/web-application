import { Component, OnInit } from '@angular/core';
import {ClientesService}  from '../../services/clientes.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Cliente} from '../../models/cliente';

@Component({
  selector: 'reporte-clientes',
  templateUrl: './reporte-clientes.component.html',
  styleUrls: ['./reporte-clientes.component.scss'],
  providers: [ClientesService]
})
export class ReporteClientesComponent implements OnInit {

  clientes: Array<string>;

  constructor(clientesService: ClientesService) {

    //this.clientes = clientesService.getClientesByEmpresa();
    this.clientes = new Array();
    this.clientes.push("Vbier83bf");
    this.clientes.push("GOAJ971098I5I");
    this.clientes.splice(1,1);
    console.log(this.clientes);
  }

  ngOnInit() {
  }

}
