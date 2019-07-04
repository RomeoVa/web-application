import { Component, OnInit,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Cliente} from '../../models/cliente';

@Component({
  selector: '[tabla-clientes]',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.scss']
})
export class TablaClientesComponent implements OnInit {

  @Input() cliente:string;
  clienteModel:Cliente;

  constructor(private modalService: NgbModal) {

    this.clienteModel = new Cliente();

    this.clienteModel.rfc = "wrwEF";
    this.clienteModel.nombre = "wrwEF";
    this.clienteModel.apellido = "wrwEF";
    this.clienteModel.direccion = "wrwEF";
    this.clienteModel.correo = "wrwEF";

  }

  ngOnInit() {
    console.log(typeof this.cliente);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  getCliente(cliente){
    this.clienteModel.rfc = "wrwEF";
    this.clienteModel.nombre = "wrwEF";
    this.clienteModel.apellido = "wrwEF";
    this.clienteModel.direccion = "wrwEF";
    this.clienteModel.correo = "wrwEF";


  }

}
