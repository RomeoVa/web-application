import { Component, OnInit,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ClientesService}  from '../../services/clientes.service';
import {EmpresaService}  from '../../services/empresa.service';
import {Cliente} from '../../models/cliente';
import {Empresa} from '../../models/empresa';


@Component({
  selector: '[tabla-clientes]',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.scss']
})
export class TablaClientesComponent implements OnInit {

  @Input() cliente:Cliente;
  @Input() empresaModel:Empresa;
  clienteModel:Cliente;
  index:number;
  arr:Array<Cliente>;

  constructor(private modalService: NgbModal,public clientesService:ClientesService,public empresaService:EmpresaService) {}

  ngOnInit() {}

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  deleteCliente(){

    var index;

    this.arr = this.empresaModel.cliente;

    this.arr.findIndex(x => x.rfc === this.cliente.rfc);

    index = this.arr.findIndex(x => x.rfc === this.cliente.rfc);

    if (index > -1) {
      this.arr.splice(index, 1);

      this.empresaModel.cliente = this.arr;
    }
  
    this.empresaService.updateEmpresa(this.empresaModel.rfc, this.empresaModel).subscribe((data: {}) => {
      console.log(data);
    });

  }



}
