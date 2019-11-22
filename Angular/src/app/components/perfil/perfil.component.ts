import { Component, OnInit } from '@angular/core';
import {Empresa} from '../../models/empresa';
import {Router, ActivatedRoute} from '@angular/router';
import {EmpresaService}  from '../../services/empresa.service';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfilModel:Empresa;
  perfil:Empresa;
  empresa:Empresa[];
  submitted = false;

  rfc = JSON.parse(localStorage.getItem('currentUser')).rfc;

  constructor(public empresaService:EmpresaService) {


    this.perfilModel = new Empresa();

  }

  onSubmit() {
    this.submitted = true;
    this.empresaService.updateEmpresa(this.perfilModel.rfc,this.perfilModel).subscribe(empresa => console.log(empresa));
    console.log(this.perfilModel);

  }

  ngOnInit() {
    this.empresaService.getEmpresaById(this.rfc).subscribe((empresa: {}) => {
      console.log(this.perfilModel);
      this.perfilModel = empresa
    });

  }



}
