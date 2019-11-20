import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Empresa} from '../../models/empresa';
import {Router, ActivatedRoute} from '@angular/router';
import {EmpresaService}  from '../../services/empresa.service';

@Component({
  selector: 'registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.scss']
})
export class RegistroEmpresaComponent implements OnInit {
  hidden = false;
  perfilModel:Empresa;
  empresa:Empresa[];
  submitted = false;

  constructor(public empresaService:EmpresaService) {
    this.perfilModel = new Empresa();
    this.perfilModel.cliente = new Array();
  }
  @Output() HiddenEvent = new EventEmitter<boolean>();

  ngOnInit() {
  }

  Hide(){
    this.hidden = false;
    this.HiddenEvent.emit(this.hidden);
  }

  onSubmit() {
    this.submitted = true;
    this.perfilModel.role = "Empresa";
    this.empresaService.addEmpresa(this.perfilModel).subscribe(empresa => this.empresa.push(empresa));
  }

}
