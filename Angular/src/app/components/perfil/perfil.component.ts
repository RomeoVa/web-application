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

  perfilModel;
  perfil:Empresa;
  empresa:Empresa[];
  submitted = false;

  constructor(public empresaService:EmpresaService) {

    //empresaService.getEmpresaById(rfc).subscribe(empresa =>
      //this.perfilModel = empresa);
    this.perfilModel = new Empresa("Aksjdfgo23", "FEMSA", "Fomento Económico Mexicano S.A.B. de C.V.", "México", "femsa@gmail.com", "12345", "", "");

  }

  onSubmit() {
    this.submitted = true;
    this.empresaService.updateEmpresa(this.perfilModel.rfc,this.perfilModel).subscribe(empresa => this.empresa.push(empresa));
    console.log(this.perfilModel);

  }

  ngOnInit() {
  }



}
