import { Component, OnInit } from '@angular/core';
import {Empresa} from '../../models/empresa';

@Component({
  selector: 'perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfilModel;
  submitted = false;

  constructor() {

    this.perfilModel = new Empresa("Aksjdfgo23","FEMSA","Fomento Económico Mexicano S.A.B. de C.V.","México","femsa@gmail.com","12345","","");

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.perfilModel.nombre);

  }

  ngOnInit() {
  }



}
