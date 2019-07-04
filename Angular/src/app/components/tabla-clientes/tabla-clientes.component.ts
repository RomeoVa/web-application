import { Component, OnInit,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ClientesService}  from '../../services/clientes.service';
import {EmpresaService}  from '../../services/empresa.service';
import {Cliente} from '../../models/cliente';

@Component({
  selector: '[tabla-clientes]',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.scss']
})
export class TablaClientesComponent implements OnInit {

  @Input() cliente:string;
  clienteModel:Cliente;
  index:number;
  arr: Array<string>;

  constructor(private modalService: NgbModal,public clientesService:ClientesService,public empresaService:EmpresaService) {

    this.clienteModel = new Cliente();
    this.arr = new Array();

  }

  ngOnInit() {
    console.log(this.cliente);
    this.clientesService.getClienteById(this.cliente).subscribe((data: {}) => {
      console.log(data);
      this.clienteModel = data[0];
    });

  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  deleteCliente(){
    for(var _i = 0; _i < this.arr.length; _i++){
      if(this.arr[_i]==this.cliente){
        this.index=_i;
      }
    }

    this.arr.splice(this.index,1);

    this.empresaService.updateEmpresa ("rfc", "empresa").subscribe((data: {}) => {
      console.log(data);
    });

  }



}
