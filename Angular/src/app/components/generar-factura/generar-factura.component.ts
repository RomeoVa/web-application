import { Component, OnInit } from '@angular/core';
import {Factura} from '../../models/factura';
import {Concepto} from '../../models/concepto';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'generar-factura',
  templateUrl: './generar-factura.component.html',
  styleUrls: ['./generar-factura.component.scss']
})
export class GenerarFacturaComponent implements OnInit {

  facturaModel:Factura;
  conceptoModel:Concepto;
  conceptos: Concepto[];
  index: number;
  public total:number;
  submitted = false;
  clientes =["Romeo","Jesús","Naji"];

  constructor(private router: Router) {

    this.facturaModel = new Factura(1);
    this.conceptoModel = new Concepto();
    this.conceptos = new Array();
    this.index = 0;
    this.facturaModel.total = 0;
  }

  onSubmit() {
    this.submitted = true;

    this.facturaModel.total = this.facturaModel.total + this.facturaModel.impuesto;
    this.facturaModel.conceptos = this.conceptos;
    this.facturaModel.firmaDigital = "cilq3u4bfufb43pqibf4";
    this.facturaModel.selloDigital = "fo3q4834f3i95ytt303";


    console.log(this.facturaModel);
    this.facturaModel = new Factura(1);
    this.conceptos = [];
  }

  ngOnInit() {
  }

  newConcepto(){
    this.conceptoModel = new Concepto();
  }

  importe(cantidad:number,precio_unitario:number):number{
    return cantidad*precio_unitario;
  }

  agregarConcepto(){
    console.log(this.conceptoModel);
    this.conceptoModel.id = this.index;
    this.conceptoModel.importe = this.importe(this.conceptoModel.cantidad,this.conceptoModel.precio_unitario);
    this.facturaModel.total = this.facturaModel.total + this.conceptoModel.importe;
    this.conceptos.push(this.conceptoModel);
    this.index = this.index + 1;

    console.log(this.conceptos);
    this.conceptoModel = new Concepto();

  }

}
