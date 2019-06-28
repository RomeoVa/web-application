import { Component, OnInit } from '@angular/core';
import {Empresa} from '../../models/empresa';
import {EmpresaService}  from '../../services/empresa.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [EmpresaService]
})
export class MenuComponent implements OnInit {

  empresaModel;

  constructor(empresaService:EmpresaService) {
    this.empresaModel = empresaService.getEmpresaInfo();
  }

  ngOnInit() {
  }

}
