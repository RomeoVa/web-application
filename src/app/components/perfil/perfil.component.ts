import { Component, OnInit } from '@angular/core';
import {Empresa} from '../../models/empresa'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  perfilModel;
  submitted = false;

  constructor() {

    this.perfilModel = new Empresa("FEMSA","Fomento Económico Mexicano S.A.B. de C.V.","Aksjdfgo23","femsa@gmail.com","12345");

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.perfilModel.nombre);

  }

  ngOnInit() {
  }



}
