import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../models/cliente';
import {Empresa} from '../../models/empresa';
import {Router, ActivatedRoute} from '@angular/router';
import {EmpresaService}  from '../../services/empresa.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  perfilModel:Empresa;
  clientModel:Cliente;
  clientes;
  id;
  sub;
  index;
  empresa:Empresa[];
  submitted = false;

  rfc = JSON.parse(localStorage.getItem('currentUser')).rfc;

  constructor(public empresaService:EmpresaService,private _Activatedroute:ActivatedRoute,
    private _router:Router) {
    this.perfilModel = new Empresa();
    this.clientModel = new Cliente();
    this.perfilModel.cliente = [];

    this.sub=this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
    })

  }

  ngOnInit() {

    this.empresaService.getEmpresaById(this.rfc).subscribe((empresa: {}) => {
      this.perfilModel = empresa
      this.clientes = this.perfilModel.cliente;
    
      this.index = this.clientes.findIndex(x => x.rfc === this.id);
      
      this.clientModel = this.clientes[this.index];
  
    });
    
  }

  onSubmit() {
    this.submitted = true;
    this.empresaService.updateEmpresa(this.perfilModel.rfc,this.perfilModel).subscribe(empresa => console.log(empresa));
  }

}
