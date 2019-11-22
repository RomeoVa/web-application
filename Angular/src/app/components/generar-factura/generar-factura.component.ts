import { Component, OnInit } from '@angular/core';
import {Factura} from '../../models/factura';
import {Concepto} from '../../models/concepto';
import {Empresa} from '../../models/empresa';
import {Cliente} from '../../models/cliente';
import {FacturasService}  from '../../services/facturas.service';
import {EmpresaService}  from '../../services/empresa.service';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'generar-factura',
  templateUrl: './generar-factura.component.html',
  styleUrls: ['./generar-factura.component.scss']
})
export class GenerarFacturaComponent implements OnInit {

  facturaModel:Factura;
  empresaModel:Empresa;
  conceptoModel:Concepto;
  conceptos: Concepto[];
  facturas:Factura[];
  index: number;
  value: number;
  public total:number;
  submitted = false;
  clientes;
  estatus = ["exitosa","pendiente","cancelada"];
  rfc = JSON.parse(localStorage.getItem('currentUser')).rfc;
  clientesEmpresa: Array<string>;
  pos;

  constructor(private router: Router,public facturasService:FacturasService,public empresaService:EmpresaService) {

    this.facturaModel = new Factura();
    this.empresaModel = new Empresa();
    this.conceptoModel = new Concepto();
    this.conceptos = new Array();
    this.facturas = new Array();
    this.index = 0;
    this.facturaModel.total = 0;
    this.clientes = new Array<Cliente>();

    this.empresaService.getEmpresaById(this.rfc).subscribe((data: any) => {
      this.empresaModel = data;
      this.clientes = this.empresaModel.cliente;
    });

    
  
  }

  onSubmit() {
    this.submitted = true;

    //Assigning other data to the invoice
    this.facturaModel.total = this.facturaModel.total + this.facturaModel.impuesto;
    this.facturaModel.concepto = this.conceptos;
    this.facturaModel.firmaDigital = "cilq3u4bfufb43pqibf4";
    this.facturaModel.selloDigital = "fo3q4834f3i95ytt303";

    //Assigning status to the invoice
    this.value = Math.floor(Math.random() * 3);
    this.facturaModel.estatus = this.estatus[this.value];

    //Sending the invoice to the server
    this.facturasService.addFactura(this.facturaModel).subscribe(factura => this.facturas.push(factura));

    console.log(this.facturaModel);
    this.facturaModel = new Factura();
    this.conceptos = [];
  }

  ngOnInit() {

    
    
  }


  onChange(newValue): void{
    
    if(this.facturaModel.rfc_cliente != null)
    {
      this.pos = this.clientes.findIndex(x => x.rfc === this.facturaModel.rfc_cliente);

      this.facturaModel.cliente = this.clientes[this.pos].nombre;
      this.facturaModel.direccion_cliente = this.clientes[this.pos].direccion;
    }
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

  agregarCliente(){

    this.empresaService.getEmpresaById(this.rfc).subscribe((data: any) => {
      console.log(data);
      //this.facturas2 = data;
    });

  }

}
