import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {Empresa} from '../../models/empresa';
import {Router, ActivatedRoute} from '@angular/router';
import {EmpresaService}  from '../../services/empresa.service';

@Component({
  selector: 'registro-clientes',
  templateUrl: './registro-clientes.component.html',
  styleUrls: ['./registro-clientes.component.scss']
})
export class RegistroClientesComponent implements OnInit {

  hidden = false;
  perfilModel:Empresa;
  clientModel:Cliente;
  empresa:Empresa[];
  submitted = false;

  rfc = JSON.parse(localStorage.getItem('currentUser')).rfc;

  constructor(public empresaService:EmpresaService) {
    this.perfilModel = new Empresa();
    this.clientModel = new Cliente();
    this.perfilModel.cliente = [];

    this.empresaService.getEmpresaById(this.rfc).subscribe((empresa: {}) => {
      this.perfilModel = empresa
    });

    

  }
  @Output() HiddenEvent = new EventEmitter<boolean>();

  ngOnInit() {
  }

  Hide(){
    this.hidden = true;
    this.HiddenEvent.emit(this.hidden);
  }

  onSubmit() {
    this.submitted = true;
    this.perfilModel.cliente.push(this.clientModel);
    this.empresaService.updateEmpresa(this.perfilModel.rfc,this.perfilModel).subscribe(empresa => console.log(empresa));
  }

}
