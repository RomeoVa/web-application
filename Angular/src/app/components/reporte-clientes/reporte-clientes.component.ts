import { Component, OnInit } from '@angular/core';
import {ClientesService}  from '../../services/clientes.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'reporte-clientes',
  templateUrl: './reporte-clientes.component.html',
  styleUrls: ['./reporte-clientes.component.scss'],
  providers: [ClientesService]
})
export class ReporteClientesComponent implements OnInit {

  clientes;

  constructor(clientesService: ClientesService) {
    this.clientes= clientesService.getClientesByEmpresa();
  }

  ngOnInit() {
  }

}
