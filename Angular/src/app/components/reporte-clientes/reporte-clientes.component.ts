import { Component, OnInit } from '@angular/core';
import {ClientesService}  from '../../services/clientes.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Cliente} from '../../models/cliente';
import {EmpresaService}  from '../../services/empresa.service';

@Component({
  selector: 'reporte-clientes',
  templateUrl: './reporte-clientes.component.html',
  styleUrls: ['./reporte-clientes.component.scss'],
  providers: [ClientesService]
})
export class ReporteClientesComponent implements OnInit {

  clientes: Array<string>;
  rfc = JSON.parse(localStorage.getItem('currentUser')).rfc;

  constructor(clientesService: ClientesService,empresaService:EmpresaService) {

    empresaService.getEmpresaById(this.rfc).subscribe((empresa: any) => {
      console.log(empresa);
      this.clientes = empresa.clientes;
    });

    //this.clientes = clientesService.getClientesByEmpresa();
    /*this.clientes = new Array();
    this.clientes.push("Vbier83bf");
    this.clientes.push("GOAJ971098I5I");
    this.clientes.splice(1,1);
    console.log(this.clientes);*/
  }

  ngOnInit() {
  }

}
