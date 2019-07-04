import { Component, OnInit } from '@angular/core';
import {Factura} from '../../models/factura';
import {Concepto} from '../../models/concepto';
import {FacturasService}  from '../../services/facturas.service';

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
  facturas:Factura[];
  index: number;
  value: number;
  public total:number;
  submitted = false;
  clientes =["Romeo","Jesús","Naji"];
  estatus = ["exitosa","pendiente","cancelada"];

  constructor(private router: Router,public facturasService:FacturasService) {

    this.facturaModel = new Factura();
    this.conceptoModel = new Concepto();
    this.conceptos = new Array();
    this.facturas = new Array();
    this.index = 0;
    this.facturaModel.total = 0;

  }

  onSubmit() {
    this.submitted = true;

    this.facturaModel.total = this.facturaModel.total + this.facturaModel.impuesto;
    this.facturaModel.concepto = this.conceptos;
    this.facturaModel.firmaDigital = "cilq3u4bfufb43pqibf4";
    this.facturaModel.selloDigital = "fo3q4834f3i95ytt303";

    this.value = Math.floor(Math.random() * 3);
    this.facturaModel.estatus = this.estatus[this.value];

    this.facturasService.addFactura(this.facturaModel).subscribe(factura => this.facturas.push(factura));

    console.log(this.facturaModel);
    this.facturaModel = new Factura();
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
